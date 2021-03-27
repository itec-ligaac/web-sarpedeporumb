const httpStatus = require('http-status');
const { omit } = require('lodash');
const Location = require('../models/location.model');

/**
 * Load location and append to req.
 * @public
 */
exports.load = async (req, res, next, id) => {
  try {
    const user = await Location.get(id);
    req.locals = { user };
    return next();
  } catch (error) {
    return next(error);
  }
};

/**
 * Get location
 * @public
 */
exports.get = (req, res) => res.json(req.locals.user.transform());

/**
 * Create new location
 * @public
 */
exports.create = async (req, res, next) => {
  try {
    const location = new Location(req.body);
    const savedLocation = await location.save();
    res.status(httpStatus.CREATED);
    res.json(savedLocation.transform());
  } catch (error) {
    next(Location.checkDuplicateTitle(error));
  }
};

/**
 * Replace existing location
 * @public
 */
exports.replace = async (req, res, next) => {
  try {
    const { location } = req.locals;
    const newLocation = new Location(req.body);
    const newLocationObject = omit(newLocation.toObject(), '_id');

    await location.updateOne(newLocationObject, { override: true, upsert: true });
    const savedLocation = await Location.findById(location._id);

    res.json(savedLocation.transform());
  } catch (error) {
    next(Location.checkDuplicateTitle(error));
  }
};

/**
 * Update existing location
 * @public
 */
exports.update = (req, res, next) => {
  const updatedLocation = omit(req.body);
  const location = Object.assign(req.locals.user, updatedLocation);

  location.save()
    .then(savedLocation => res.json(savedLocation.transform()))
    .catch(e => next(Location.checkDuplicateTitle(e)));
};

/**
 * Get location list
 * @public
 */
exports.list = async (req, res, next) => {
  try {
    const locations = await Location.list(req.query);
    const transformedLocations = locations.map(location => location.transform());
    res.json(transformedLocations);
  } catch (error) {
    next(error);
  }
};

/**
 * Delete location
 * @public
 */
exports.remove = (req, res, next) => {
  const { location } = req.locals;

  location.remove()
    .then(() => res.status(httpStatus.NO_CONTENT).end())
    .catch(e => next(e));
};
