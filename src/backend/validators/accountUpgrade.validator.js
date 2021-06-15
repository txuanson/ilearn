const Joi = require('joi');

module.exports = Joi.object({
    access_code: Joi
        .string()
        .required()
});