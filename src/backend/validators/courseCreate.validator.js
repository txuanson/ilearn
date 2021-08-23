const Joi = require('joi');
module.exports = Joi.object({
    name: Joi
        .string()
        .required(),
    description: Joi
        .string()
        .allow("")
        .max(150)
        .default(""),
    content: Joi
        .string()
        .allow("")
        .default(""),
    category: Joi
        .string()
        .required(),
    public: Joi
        .boolean()
        .default(true)
});