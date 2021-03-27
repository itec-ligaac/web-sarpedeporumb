const express = require('express');
const validate = require('express-validation');
const controller = require('../../controllers/question.controller');
const { authorize, ADMIN, LOGGED_USER } = require('../../middlewares/auth');
const {
  listQuestions,
  createQuestion,
  replaceQuestion,
  updateQuestion,
} = require('../../validations/question.validation');

const router = express.Router();

/**
 * Load user when API with userId route parameter is hit
 */
router.param('questionId', controller.load);


router
  .route('/')
  /**
   * @api {get} v1/questions List Questions
   * @apiDescription Get a list of questions
   * @apiVersion 1.0.0
   * @apiName ListQuestions
   * @apiGroup Questions
   * @apiPermission user
   *
   * @apiHeader {String} Authorization   User's access token
   *
   * @apiParam  {Number{1-}}         [page=1]     List page
   * @apiParam  {Number{1-100}}      [perPage=1]  Questions per page
   * @apiParam  {String}             [question]       Question's name
   *
   * @apiSuccess {Object[]} questions List of questions.
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   */
  .get(authorize(LOGGED_USER), validate(listQuestions), controller.list)
  /**
   * @api {post} v1/questions Create Question
   * @apiDescription Create a new question
   * @apiVersion 1.0.0
   * @apiName CreateQuestion
   * @apiGroup Questions
   * @apiPermission admin
   *
   * @apiHeader {String} Authorization   User's access token
   *
   * @apiParam  {String}             title       Question's title
   * @apiParam  {String{..512}}      description Question's description
   * @apiParam  {String{..4}}        [options]   Question's options
   *
   * @apiSuccess (Created 201) {String}       id            Question's id
   * @apiSuccess (Created 201) {String}       title         Question's title
   * @apiSuccess (Created 201) {String}       description   Question's description
   * @apiSuccess (Created 201) {String{..4}}  options       Question's options
   * @apiSuccess (Created 201) {Date}         createdAt     Timestamp
   *
   * @apiError (Bad Request 400)   ValidationError  Some parameters may contain invalid values
   * @apiError (Unauthorized 401)  Unauthorized     Only authenticated users can create the data
   * @apiError (Forbidden 403)     Forbidden        Only admins can create the data
   */
  .post(authorize(ADMIN), validate(createQuestion), controller.create);


router
  .route('/:questionId')
  /**
   * @api {get} v1/questions/:id Get Question
   * @apiDescription Get question information
   * @apiVersion 1.0.0
   * @apiName GetQuestion
   * @apiGroup Questions
   * @apiPermission user
   *
   * @apiHeader {String} Authorization   User's access token
   *
   * @apiSuccess  {String}       id            Question's id
   * @apiSuccess  {String}       title         Question's title
   * @apiSuccess  {String}       description   Question's description
   * @apiSuccess  {String{..4}}  options       Question's options
   * @apiSuccess  {Date}         createdAt     Timestamp
   *
   * @apiError (Unauthorized 401) Unauthorized Only authenticated users can access the data
   * @apiError (Not Found 404)    NotFound     Question does not exist
   */
  .get(authorize(ADMIN), controller.get)
  /**
   * @api {put} v1/questions/:id Replace Question
   * @apiDescription Replace the whole question document with a new one
   * @apiVersion 1.0.0
   * @apiName ReplaceQuestion
   * @apiGroup Questions
   * @apiPermission user
   *
   * @apiHeader {String} Authorization   User's access token
   *
   * @apiParam  {String}       id            Question's id
   * @apiParam  {String}       title         Question's title
   * @apiParam  {String}       description   Question's description
   * @apiParam  {String{..4}}  options       Question's options
   * @apiParam  {Date}         createdAt     Timestamp
   *
   * @apiSuccess {String}      id            Question's id
   * @apiSuccess {String}      title         Question's title
   * @apiSuccess {String}      description   Question's description
   * @apiSuccess {String}      options       Question's options
   * @apiSuccess {Date}        createdAt     Timestamp
   *
   * @apiError (Bad Request 400)  ValidationError  Some parameters may contain invalid values
   * @apiError (Unauthorized 401) Unauthorized Only authenticated users can modify the data
   * @apiError (Forbidden 403)    Forbidden    Only admins can modify the data
   * @apiError (Not Found 404)    NotFound     Question does not exist
   */
  .put(authorize(LOGGED_USER), validate(replaceQuestion), controller.replace)
  /**
   * @api {patch} v1/questions/:id Update Question
   * @apiDescription Update some fields of a question document
   * @apiVersion 1.0.0
   * @apiName UpdateQuestion
   * @apiGroup Questions
   * @apiPermission user
   *
   * @apiHeader {String} Authorization   User's access token
   *
   * @apiParam  {String}       id            Question's id
   * @apiParam  {String}       title         Question's title
   * @apiParam  {String}       description   Question's description
   * @apiParam  {String{..4}}  options       Question's options
   * @apiParam  {Date}         createdAt     Timestamp
   *
   * @apiSuccess {String}      id            Question's id
   * @apiSuccess {String}      title         Question's title
   * @apiSuccess {String}      description   Question's description
   * @apiSuccess {String}      options       Question's options
   * @apiSuccess {Date}        createdAt     Timestamp
   *
   * @apiError (Bad Request 400)  ValidationError  Some parameters may contain invalid values
   * @apiError (Unauthorized 401) Unauthorized Only authenticated users can modify the data
   * @apiError (Forbidden 403)    Forbidden    Only admins can modify the data
   * @apiError (Not Found 404)    NotFound     User does not exist
   */
  .patch(authorize(LOGGED_USER), validate(updateQuestion), controller.update)
  /**
   * @api {patch} v1/questions/:id Delete Question
   * @apiDescription Delete a question
   * @apiVersion 1.0.0
   * @apiName DeleteQuestion
   * @apiGroup Questions
   * @apiPermission user
   *
   * @apiHeader {String} Authorization   User's access token
   *
   * @apiSuccess (No Content 204)  Successfully  deleted
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can delete the data
   * @apiError (Forbidden 403)     Forbidden     Only admins can delete the data
   * @apiError (Not Found 404)     NotFound      Question does not exist
   */
  .delete(authorize(LOGGED_USER), controller.remove);


module.exports = router;
