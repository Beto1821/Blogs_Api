const joi = require('joi');

const validaBody = (body) =>
  joi.object({
    title: joi.string().required().messages({
      'string.empty': 'Some required fields are missing',
    }),
    content: joi.string().required().messages({
      'string.empty': 'Some required fields are missing',
    }),
    categoryIds: joi.array().required().messages({
      empty: 'Some required fields are missing',
    }),
  }).validate(body);

  module.exports = validaBody;
