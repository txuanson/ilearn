const Joi = require('joi');
module.exports = Joi.object({
    email: Joi
        .string()
        .email()
        .required(),
    username: Joi
        .string()
        .min(8)
        .max(20)
        .required(),
    name: Joi
        .string()
        .required(),
    password: Joi
        .string()
        .required()
})