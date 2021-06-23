const { PAGE_SIZE } = require("../../configs/env");
const { asyncCatch, pagination } = require("../../helpers/utils");
const Account = require('../../models/Account');

const listAccount = asyncCatch(async (req, res, next) => {
    const pagi = pagination(req.query.page);

    const items = await Account.find({}, "_id name username email").limit(pagi.limit).skip(pagi.skip).exec();
    const itemsCount = await Account.estimatedDocumentCount().exec();

    res.send({
        items,
        items_count: itemsCount
    });
});

const findAccount = asyncCatch(async (req, res, next) => {
    const pagi = pagination(req.query.page);
    const username = req.query.username ? req.query.username : "";
    
    const items = await Account.find({
        username: {
            $regex: username, $options: "i"
        }
    },
        "_id name username email")
        .limit(pagi.limit)
        .skip(pagi.skip)
        .exec();

    const itemsCount = await Account.countDocuments({
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