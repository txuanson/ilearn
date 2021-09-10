const { asyncCatch } = require("../../helpers/utils");
const loginValidator = require("../../validators/login.validator");
const Account = require('../../models/Account');
const { BadReqest, Forbidden } = require("../../helpers/response");
const { comparePassword, signJwtData } = require("../../helpers/crypto");

module.exports = asyncCatch(async (req, res, next) => {
    const { error, value } = loginValidator.validate(req.body);
    if (error)
        throw new BadReqest(error.message);
    const account = await Account.findOne({ username: value.username }, 'name username password avatar role banned').exec();
    if (account.banned > Date.now()) throw new BadReqest(`You have been banned until ${account.banned}`);
    if (!account)
        throw new BadReqest('Wrong username or password!');

    const correctPwd = comparePassword(value.password, account.password);
    if (!correctPwd)
        throw new BadReqest('Wrong username or password!');

    res.send(
        {
            user_data: {
                _id: account._id,
                name: account.name,
                username: account.username,
                avatar: account.avatar,
                role: account.role
            },
            token: signJwtData(account)
        })
})