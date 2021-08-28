const Joi = require('joi');

module.exports = Joi.object({
    user_id: Joi
        .string()
        .required()
});