const { Unauthorized } = require("../helpers/response");
const { asyncCatch } = require("../helpers/utils");

module.exports = asyncCatch(async (req, res, next) => {
    if (!req.user_data)
        throw new Unauthorized('Unauthorized!');
    next();
})