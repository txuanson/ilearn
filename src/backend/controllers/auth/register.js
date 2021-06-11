const { BadReqest } = require("../../helpers/response");
const { asyncCatch } = require("../../helpers/utils");
const userRegValidator = require("../../validators/userReg.validator");
const User = require('../../models/user');
const { hashPassword, signJwtData } = require("../../helpers/crypto");
module.exports = asyncCatch(async (req, res, next) => {
    const { error, value } = userRegValidator.validate(req.body);
    if (error)
        throw new BadReqest(error.message);

    const checkUser = await User.find({
        $or: [
            {
                email: value.email
            },
            {
                username: value.username
            }
        ]
    }).exec();

    if (checkUser.length !== 0)
        throw new BadReqest('Email or username used!');

    const user = await User.create({
        email: value.email,
        username: value.username,
        password: hashPassword(value.password),
        name: value.name
    })

    user.save();
    console.log(user);
    res.send(
        {
            userData: {
                name: user.name,
                username: user.username,
                avatar: user.avatar
            }
            ,
            token: signJwtData(user)
        })
})