const { PAGE_SIZE } = require("../../config/env");
const { asyncCatch, pagination } = require("../../helpers/utils");
const User = require('../../models/user');

const listUser = asyncCatch(async (req, res, next) => {
    const pagi = pagination(req.query.page);

    const user = await User.find({}, "_id name username email").limit(pagi.limit).skip(pagi.skip).exec();
    const itemsCount = await User.estimatedDocumentCount().exec();

    res.send({
        items: user,
        itemsCount: itemsCount
    });
});

const findUser = asyncCatch(async (req, res, next) => {
    const pagi = pagination(req.query.page);
    const username = req.query.username ? req.query.username : "";
    
    const user = await User.find({
        username: {
            $regex: username, $options: "i"
        }
    },
        "_id name username email")
        .limit(pagi.limit)
        .skip(pagi.skip)
        .exec();

    const itemsCount = await User.countDocuments({
        username: {
            $regex: username, $options: "i"
        }
    })
        .exec();

    res.send({
        items: user,
        itemsCount: itemsCount
    });
})

module.exports = {
    list: listUser,
    find: findUser
}