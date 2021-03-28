const Joi = require('joi');

module.exports = {

  // GET /v1/questions
  listQuestions: {
    query: {
      page: Joi.number().min(1),
      perPage: Joi.number().min(1).max(100),
      title: Joi.string(),
    },
  },

  // POST /v1/questions
  createQuestion: {
    body: {
      title: Joi.string().required(),
      description: Joi.string().max(512),
      options: Joi.array().min(1).max(4).items({
        title: Joi.string().max(64).required(),
        imageUrl: Joi.string().max(512).regex(/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi),
      }),
    },
  },

  // PUT /v1/questions/:questionId
  replaceQuestion: {
    body: {
      title: Joi.string().required(),
      description: Joi.string().max(512),
      options: Joi.array().min(1).max(4).items({
        title: Joi.string().max(64).required(),
        imageUrl: Joi.string().max(512).regex(/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi),
      }),
    },
    params: {
      questionId: Joi.string().regex(/^[a-fA-F0-9]{24}$/).required(),
    },
  },

  // PATCH /v1/questions/:questionId
  updateQuestion: {
    body: {
      title: Joi.string(),
      description: Joi.string().max(512),
      options: Joi.array().min(1).max(4).items({
        title: Joi.string().max(64),
        imageUrl: Joi.string().max(512).regex(/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi),
      }),
    },
    params: {
      questionId: Joi.string().regex(/^[a-fA-F0-9]{24}$/).required(),
    },
  },

};
