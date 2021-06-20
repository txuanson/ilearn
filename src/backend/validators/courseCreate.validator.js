const Joi = require('joi');
module.exports = Joi.object({
    name: Joi
        .string()
        .required(),
    content: Joi
        .string()
        .allow(null, "")
        .default(""),
    category: Joi
        .string()
        .required(),
    public: Joi
        .boolean()
        .default(true)
});