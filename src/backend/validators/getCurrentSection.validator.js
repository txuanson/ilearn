const Joi = require('joi');
module.exports = Joi.object({
    course_id: Joi
        .string()
        .required()
});