const express = require('express');
const validate = require('express-validation');
const controller = require('../../controllers/location.controller');
const { authorize, ADMIN, LOGGED_USER } = require('../../middlewares/auth');
const {
  listLocations,
  createLocation,
  findLocations,
  replaceLocation,
  updateLocation,
} = require('../../validations/location.validation');

const router = express.Router();

/**
 * Load user when API with userId route parameter is hit
 */
router.param('questionId', controller.load);


router
  .route('/')
  /**
   * @api {get} v1/locations List Locations
   * @apiDescription Get a list of locations
   * @apiVersion 1.0.0
   * @apiName ListQuestions
   * @apiGroup Locations
   * @apiPermission user
   *
   * @apiHeader {String} Authorization   User's access token
   *
   * @apiParam  {Number{1-}}         [page=1]     List page
   * @apiParam  {Number{1-100}}      [perPage=1]  Locations per page
   * @apiParam  {String}             [location]   Location's name
   *
   * @apiSuccess {Object[]} locations List of locations.
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   */
  .get(authorize(LOGGED_USER), validate(listLocations), controller.list)
  /**
   * @api {post} v1/locations Create Location
   * @apiDescription Create a new location
   * @apiVersion 1.0.0
   * @apiName GetLocationCount
   * @apiGroup Locations
   * @apiPermission user
   *
   * @apiHeader {String} Authorization   User's access token
   *
   * @apiParam  {String}             title       Location's title
   * @apiParam  {String{..512}}      description Location's description
   * @apiParam  {String{..4}}        [options]   Location's options
   *
   * @apiSuccess (Created 201) {String}       id            Location's id
   * @apiSuccess (Created 201) {String}       name          Location's title
   * @apiSuccess (Created 201) {String}       description   Location's description
   * @apiSuccess (Created 201) {Array{1..}}   scores        Location's scores
   * @apiSuccess (Created 201) {Array{1..}}   images        Location's images
   * @apiSuccess (Created 201) {Date}         createdAt     Timestamp
   *
   * @apiError (Bad Request 400)   ValidationError  Some parameters may contain invalid values
   * @apiError (Unauthorized 401)  Unauthorized     Only authenticated users can create the data
   * @apiError (Forbidden 403)     Forbidden        Only admins can create the data
   */
  .post(authorize(ADMIN), validate(createLocation), controller.create);
router
  .route('/count')
  /**
   * @api {get} v1/locations/count Get Location count
   * @apiDescription Get location count
   * @apiVersion 1.0.0
   * @apiName GetLocationCount
   * @apiGroup Locations
   * @apiPermission user
   *
   * @apiHeader {String} Authorization   User's access token
   *
   * @apiSuccess  {Array{1..}}   scores        Location's scores
   *
   * @apiError (Unauthorized 401) Unauthorized Only authenticated users can access the data
   * @apiError (Not Found 404)    NotFound     Location does not exist
   */
  .get(authorize(LOGGED_USER, validate(findLocations)), controller.count);


router
  .route('/:locationId')
  /**
   * @api {get} v1/locations/:id Get Location
   * @apiDescription Get location information
   * @apiVersion 1.0.0
   * @apiName GetQuestion
   * @apiGroup Locations
   * @apiPermission user
   *
   * @apiHeader {String} Authorization   User's access token
   *
   * @apiSuccess {String}       id            Location's id
   * @apiSuccess {String}       name          Location's title
   * @apiSuccess {String}       description   Location's description
   * @apiSuccess {Array{1..}}   scores        Location's scores
   * @apiSuccess {Array{1..}}   images        Location's images
   * @apiSuccess {Date}         createdAt     Timestamp
   *
   * @apiError (Unauthorized 401) Unauthorized Only authenticated users can access the data
   * @apiError (Not Found 404)    NotFound     Location does not exist
   */
  .get(authorize(ADMIN), controller.get)
  /**
   * @api {put} v1/locations/:id Replace Location
   * @apiDescription Replace the whole location document with a new one
   * @apiVersion 1.0.0
   * @apiName ReplaceQuestion
   * @apiGroup Locations
   * @apiPermission user
   *
   * @apiHeader {String} Authorization   User's access token
   *
   * @apiParam {String}       id            Location's id
   * @apiParam {String}       name          Location's title
   * @apiParam {String}       description   Location's description
   * @apiParam {Array{1..}}   scores        Location's scores
   * @apiParam {Array{1..}}   images        Location's images
   * @apiParam {Date}         createdAt     Timestamp
   *
   * @apiSuccess {String}       id            Location's id
   * @apiSuccess {String}       name          Location's title
   * @apiSuccess {String}       description   Location's description
   * @apiSuccess {Array{1..}}   scores        Location's scores
   * @apiSuccess {Array{1..}}   images        Location's images
   * @apiSuccess {Date}         createdAt     Timestamp
   *
   * @apiError (Bad Request 400)  ValidationError  Some parameters may contain invalid values
   * @apiError (Unauthorized 401) Unauthorized Only authenticated users can modify the data
   * @apiError (Forbidden 403)    Forbidden    Only admins can modify the data
   * @apiError (Not Found 404)    NotFound     Location does not exist
   */
  .put(authorize(LOGGED_USER), validate(replaceLocation), controller.replace)
  /**
   * @api {patch} v1/locations/:id Update Location
   * @apiDescription Update some fields of a location document
   * @apiVersion 1.0.0
   * @apiName UpdateQuestion
   * @apiGroup Locations
   * @apiPermission user
   *
   * @apiHeader {String} Authorization   User's access token
   *
   * @apiParam  {String}       id            Location's id
   * @apiParam  {String}       title         Location's title
   * @apiParam  {String}       description   Location's description
   * @apiParam  {String{..4}}  options       Location's options
   * @apiParam  {Date}         createdAt     Timestamp
   *
   * @apiSuccess {String}      id            Location's id
   * @apiSuccess {String}      title         Location's title
   * @apiSuccess {String}      description   Location's description
   * @apiSuccess {String}      options       Location's options
   * @apiSuccess {Date}        createdAt     Timestamp
   *
   * @apiError (Bad Request 400)  ValidationError  Some parameters may contain invalid values
   * @apiError (Unauthorized 401) Unauthorized Only authenticated users can modify the data
   * @apiError (Forbidden 403)    Forbidden    Only admins can modify the data
   * @apiError (Not Found 404)    NotFound     User does not exist
   */
  .patch(authorize(LOGGED_USER), validate(updateLocation), controller.update)
  /**
   * @api {patch} v1/locations/:id Delete Location
   * @apiDescription Delete a location
   * @apiVersion 1.0.0
   * @apiName DeleteQuestion
   * @apiGroup Locations
   * @apiPermission user
   *
   * @apiHeader {String} Authorization   User's access token
   *
   * @apiSuccess (No Content 204)  Successfully  deleted
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can delete the data
   * @apiError (Forbidden 403)     Forbidden     Only admins can delete the data
   * @apiError (Not Found 404)     NotFound      Location does not exist
   */
  .delete(authorize(LOGGED_USER), controller.remove);

module.exports = router;
