const httpStatus = require('http-status');
const { omit } = require('lodash');
const Question = require('../models/question.model');

/**
 * Load question and append to req.
 * @public
 */
exports.load = async (req, res, next, id) => {
  try {
    const user = await Question.get(id);
    req.locals = { user };
    return next();
  } catch (error) {
    return next(error);
  }
};

/**
 * Get question
 * @public
 */
exports.get = (req, res) => res.json(req.locals.user.transform());

/**
 * Get logged in question info
 * @public
 */
exports.loggedIn = (req, res) => res.json(req.user.transform());

/**
 * Create new question
 * @public
 */
exports.create = async (req, res, next) => {
  try {
    const question = new Question(req.body);
    const savedQuestion = await question.save();
    res.status(httpStatus.CREATED);
    res.json(savedQuestion.transform());
  } catch (error) {
    next(Question.checkDuplicateTitle(error));
  }
};

/**
 * Replace existing question
 * @public
 */
exports.replace = async (req, res, next) => {
  try {
    const { question } = req.locals;
    const newQuestion = new Question(req.body);
    const newQuestionObject = omit(newQuestion.toObject(), '_id');

    await question.updateOne(newQuestionObject, { override: true, upsert: true });
    const savedQuestion = await Question.findById(question._id);

    res.json(savedQuestion.transform());
  } catch (error) {
    next(Question.checkDuplicateTitle(error));
  }
};

/**
 * Update existing question
 * @public
 */
exports.update = (req, res, next) => {
  const updatedQuestion = omit(req.body);
  const question = Object.assign(req.locals.user, updatedQuestion);

  question.save()
    .then(savedQuestion => res.json(savedQuestion.transform()))
    .catch(e => next(Question.checkDuplicateTitle(e)));
};

/**
 * Get question list
 * @public
 */
exports.list = async (req, res, next) => {
  try {
    const questions = await Question.list(req.query);
    const transformedQuestions = questions.map(question => question.transform());
    res.json(transformedQuestions);
  } catch (error) {
    next(error);
  }
};

/**
 * Delete question
 * @public
 */
exports.remove = (req, res, next) => {
  const { question } = req.locals;

  question.remove()
    .then(() => res.status(httpStatus.NO_CONTENT).end())
    .catch(e => next(e));
};
