const { PAGE_SIZE } = require("../../configs/env");
const { asyncCatch, pagination } = require("../../helpers/utils");
const Account = require('../../models/Account');
const queryWithPagiValidator = require("../../validators/queryWithPagi.validator");

const listAccount = asyncCatch(async (req, res, next) => {
    const pagi = pagination(req.query.page);

    const items = await Account.find({}, "_id name username email")
        .skip(pagi.skip)
        .limit(pagi.limit)
        .exec();
    const itemsCount = await Account.estimatedDocumentCount().exec();

    res.send({
        items,
        items_count: itemsCount
    });
});

const findAccount = asyncCatch(async (req, res, next) => {
    const { error, value } = queryWithPagiValidator.validate(req.query);
    if (error) {
        throw new BadReqest(error.message);
    }

    const { query, page, page_size } = value;
    const pagi = pagination(page, page_size);

    const items = await Account.find({
        username: {
            $regex: query, $options: "i"
        }
    },
        "_id name username email role")
        .skip(pagi.skip)
        .limit(pagi.limit)
        .exec();

    const itemsCount = await Account.countDocuments({
        username: {
            $regex: query, $options: "i"
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