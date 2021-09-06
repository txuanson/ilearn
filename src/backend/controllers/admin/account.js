const { Admin } = require("../../configs/role");
const { BadReqest } = require("../../helpers/response");
const { asyncCatch, pagination } = require("../../helpers/utils");
const Account = require('../../models/Account');
const accountBanValidator = require("../../validators/accountBan.validator");
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

const banAccount = asyncCatch(async (req, res, next) => {
    const { error, value } = accountBanValidator.validate(req.body);
    if (error) {
        throw new BadRequest(error.message);
    }

    const { user_id, amount } = value;
    const user = await Account.findById(user_id, "role").exec();
    if (user.role === Admin) throw new BadReqest("You can not ban an ADMIN!");
    let currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + amount);
    await Account.updateOne({ _id: user_id }, { banned: currentDate });
    res.send("Success!");
})

module.exports = {
    list: listAccount,
    find: findAccount,
    ban: banAccount
}