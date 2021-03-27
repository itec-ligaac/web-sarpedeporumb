const Joi = require('joi');

module.exports = {

  listLocations: {
    query: {
      page: Joi.number().min(1),
      perPage: Joi.number().min(1).max(100),
      scores: Joi.array().min(1),
    },
  },
  // GET /v1/locations/like
  findLocations: {
    query: {
      scores: Joi.array().min(1),
    },
  },
  // POST /v1/locations
  createLocation: {
    body: {
      name: Joi.string().required(),
      description: Joi.string().max(512),
      scores: Joi.array().min(1).items({
        factor: Joi.string().max(64).required(),
        score: Joi.number().min(-100).max(100).required(),
      }).required(),
      images: Joi.array().min(1).items({
        title: Joi.string().max(64).required(),
        imageUrl: Joi.string().max(512).required(),
      }),
    },
  },

  // PUT /v1/locations/:questionId
  replaceLocation: {
    body: {
      name: Joi.string().required(),
      description: Joi.string().max(512),
      scores: Joi.array().min(1).items({
        factor: Joi.string().max(64).required(),
        score: Joi.number().min(-100).max(100).required(),
      }).required(),
      images: Joi.array().min(1).items({
        title: Joi.string().max(64).required(),
        imageUrl: Joi.string().max(512).required(),
      }),
    },
    params: {
      questionId: Joi.string().regex(/^[a-fA-F0-9]{24}$/).required(),
    },
  },

  // PATCH /v1/locations/:questionId
  updateLocation: {
    body: {
      name: Joi.string().required(),
      description: Joi.string().max(512),
      scores: Joi.array().min(1).items({
        factor: Joi.string().max(64).required(),
        score: Joi.number().min(-100).max(100).required(),
      }).required(),
      images: Joi.array().min(1).items({
        title: Joi.string().max(64).required(),
        imageUrl: Joi.string().max(512).required(),
      }),
    },
    params: {
      questionId: Joi.string().regex(/^[a-fA-F0-9]{24}$/).required(),
    },
  },

};
