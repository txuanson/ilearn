const Joi = require('joi');
module.exports = Joi.object({
    topic: Joi
        .string()
        .required(),
    content: Joi
        .string()
        .required(),
    duration: Joi
        .number()
        .integer()
        .positive()
        .default(45),
    start_time: Joi
        .date()
        .iso()
        .required()
});