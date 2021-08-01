const Joi = require('joi');
module.exports = Joi.object({
    content: Joi.string(),
    section_id: Joi.string()
});