const { BadReqest } = require("../../helpers/response");
const { asyncCatch, pagination } = require("../../helpers/utils");
const Course = require("../../models/Course");
const queryWithPagiValidator = require("../../validators/queryWithPagi.validator");
const escapeStringRgx = require('escape-string-regexp');

const getCourseAdmin = asyncCatch(async (req, res, next) => {
    const { error, value } = queryWithPagiValidator.validate(req.query);
    if (error) {
        throw new BadReqest(error.message);
    }

    const { query, page, page_size } = value;
    const regexStr = escapeStringRgx(query);
    const $regex = new RegExp(regexStr, "i");
    const pagi = pagination(page, page_size);

    const items = await Course.aggregate()
        .match({ "name": { $regex } })
        .project({
            _id: 1,
            name: 1,
            cover: 1,
            public: 1,
            subscriber_count: { $size: "$subscriber" },
            view: 1,
            section_count: { $size: "$sections" }
        })
        .skip(pagi.skip)
        .limit(pagi.limit)
        .exec()

    const items_count = await Course.countDocuments({
        name: {
            $regex
        }
    })
        .exec();

    res.send({
        items,
        items_count
    });
})

module.exports = {
    get: getCourseAdmin
}