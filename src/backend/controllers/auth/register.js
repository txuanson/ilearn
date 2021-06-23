const { BadReqest } = require("../../helpers/response");
const { asyncCatch } = require("../../helpers/utils");
const registerValidator = require("../../validators/register.validator");
const Account = require('../../models/Account');
const { hashPassword, signJwtData } = require("../../helpers/crypto");
module.exports = asyncCatch(async (req, res, next) => {
    const { error, value } = registerValidator.validate(req.body);
    if (error)
        throw new BadReqest(error.message);

    const checkAccount = await Account.find({
        $or: [
            {
                email: value.email
            },
            {
                username: value.username
            }
        ]
    }).exec();

    if (checkAccount.length !== 0)
        throw new BadReqest('Email or username used!');

    const account = await Account.create({
        email: value.email,
        username: value.username,
        password: hashPassword(value.password),
        name: value.name
    })
    
    res.send(
        {
            user_data: {
                name: account.name,
                username: account.username,
                avatar: account.avatar,
                role: account.role
            }
            ,
            token: signJwtData(account)
        })
})