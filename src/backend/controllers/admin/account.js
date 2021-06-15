const { PAGE_SIZE } = require("../../configs/env");
const { asyncCatch, pagination } = require("../../helpers/utils");
const User = require('../../models/account');

const listAccount = asyncCatch(async (req, res, next) => {
    const pagi = pagination(req.query.page);

    const items = await User.find({}, "_id name username email").limit(pagi.limit).skip(pagi.skip).exec();
    const itemsCount = await User.estimatedDocumentCount().exec();

    res.send({
        items,
        items_count: itemsCount
    });
});

const findAccount = asyncCatch(async (req, res, next) => {
    const pagi = pagination(req.query.page);
    const username = req.query.username ? req.query.username : "";
    
    const items = await User.find({
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
        items,
        items_count: itemsCount
    });
})

module.exports = {
    list: listAccount,
    find: findAccount
}