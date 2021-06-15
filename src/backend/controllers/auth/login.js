const { asyncCatch } = require("../../helpers/utils");
const loginValidator = require("../../validators/login.validator");
const Account = require('../../models/account');
const { BadReqest } = require("../../helpers/response");
const { comparePassword, signJwtData } = require("../../helpers/crypto");

module.exports = asyncCatch(async (req, res, next) => {
    const { error, value } = loginValidator.validate(req.body);
    if (error) 
        throw new BadReqest(error.message);
    const account = await Account.findOne({ username: value.username }, 'name username password avatar').exec();

    if (!account)
        throw new BadReqest('Wrong username or password!1');

    const correctPwd = comparePassword(value.password, account.password);
    if (!correctPwd)
        throw new BadReqest('Wrong username or password!2');

    res.send(
        {
            name: account.name,
            username: account.username,
            avatar: account.avatar,
            token: signJwtData(account)
        })
})