const { Admin } = require("../configs/role");
const { Unauthorized } = require("../helpers/response");
const { asyncCatch } = require("../helpers/utils");

module.exports = asyncCatch(async (req, res, next) => {
    if (!req.userData && req.userData.role < Admin)
        throw new Unauthorized('Unauthorized!');
    next();
})