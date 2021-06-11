const { asyncCatch } = require("../../helpers/utils");
const userLoginValidator = require("../../validators/userLogin.validator");
const User = require('../../models/user');
const { BadReqest } = require("../../helpers/response");

module.exports = asyncCatch(async (req, res, next) => {
    const { error, value } = userLoginValidator.validate(req.body);
    if (error) 
        throw new BadReqest(error.message);
    const user = await User.findOne({ username: value.username }, 'name username password avatar').exec();

    if (!user)
        throw new BadReqest('Wrong email or password!1');

    const correctPwd = comparePassword(value.password, user.password);
    if (!correctPwd)
        throw new BadReqest('Wrong email or password!2');

    console.log(user);
    res.send(
        {
            name: user.name,
            username: user.username,
            avatar: user.avatar,
            token: signJwtData(user)
        })
})