const Joi = require('joi');
module.exports = Joi.object({
    name: Joi
        .string()
        .required(),
    content: Joi
    .string()
    .allow(null, ""),
    user_limit: Joi
    .number()
    .integer()
    .min(0)
    .default(0)
});