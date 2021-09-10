const Joi = require('joi');
module.exports = Joi.object({
    username: Joi
        .string()
        .required(),
    password: Joi
        .string()
        // .pattern(new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'))
        // .message('Minimum eight characters, at least one letter and one number')
        .required(),
    });