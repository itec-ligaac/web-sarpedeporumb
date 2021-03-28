const mongoose = require('mongoose');
const httpStatus = require('http-status');
const { omitBy, isNil } = require('lodash');
const APIError = require('../utils/APIError');

/**
 * Question Schema
 * @private
 */
const questionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 100,
    index: true,
  },
  description: {
    type: String,
    maxlength: 512,
    trim: true,
  },
  options: {
    type: [{ title: String, imageUrl: String }],
    default: [{ title: 'test', imageUrl: null }],
    min: 1,
    max: 4,
  },
}, {
  timestamps: true,
});

/**
 * Methods
 */
questionSchema.method({
  transform() {
    const transformed = {};
    const fields = ['id', 'title', 'description', 'options', 'createdAt'];

    fields.forEach((field) => {
      transformed[field] = this[field];
    });

    return transformed;
  },

});

/**
 * Statics
 */
questionSchema.statics = {

  /**
   * Get question
   *
   * @param {ObjectId} id - The objectId of questins.
   * @returns {Promise<Question, APIError>}
   */
  async get(id) {
    try {
      let question;

      if (mongoose.Types.ObjectId.isValid(id)) {
        question = await this.findById(id).exec();
      }
      if (question) {
        return question;
      }

      throw new APIError({
        message: 'Question does not exist',
        status: httpStatus.NOT_FOUND,
      });
    } catch (error) {
      throw error;
    }
  },

  /**
   * List questions in descending order of 'createdAt' timestamp.
   *
   * @param {number} skip - Number of questions to be skipped.
   * @param {number} limit - Limit number of questions to be returned.
   * @returns {Promise<Question[]>}
   */
  list({
    page = 1, perPage = 30, title,
  }) {
    const options = omitBy({ title }, isNil);

    return this.find(options)
      .sort({ createdAt: -1 })
      .skip(perPage * (page - 1))
      .limit(perPage)
      .exec();
  },

  /**
   * Return new validation error
   * if error is a mongoose duplicate key error
   *
   * @param {Error} error
   * @returns {Error|APIError}
   */
  checkDuplicateTitle(error) {
    if (error.name === 'MongoError' && error.code === 11000) {
      return new APIError({
        message: 'Validation Error',
        errors: [{
          field: 'title',
          location: 'body',
          messages: ['"title" already exists'],
        }],
        status: httpStatus.CONFLICT,
        isPublic: true,
        stack: error.stack,
      });
    }
    return error;
  },
};

/**
 * @typedef Question
 */
module.exports = mongoose.model('Question', questionSchema);
