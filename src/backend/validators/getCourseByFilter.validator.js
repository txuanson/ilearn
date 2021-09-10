const Joi = require('joi');
const { PAGE_SIZE } = require('../configs/env');

module.exports = Joi.object({
    field: Joi
        .string()
        .valid('tutor', 'category')
        .required(),
    query: Joi
        .string()
        .required(),
    page: Joi.
        number()
        .integer()
        .positive()
        .min(1)
        .default(1),
    page_size: Joi.
        number()
        .integer()
        .positive()
        .min(1)
        .default(PAGE_SIZE)
});