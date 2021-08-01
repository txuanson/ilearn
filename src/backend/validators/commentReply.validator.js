const Joi = require('joi');
module.exports = Joi.object({
    content: Joi.string(),
    comment_id: Joi.string()
});