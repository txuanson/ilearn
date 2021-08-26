const { BadReqest } = require("../../helpers/response");
const { asyncCatch, pagination } = require("../../helpers/utils");
const Course = require("../../models/Course");
const queryWithPagiValidator = require("../../validators/queryWithPagi.validator");

const getCourseAdmin = asyncCatch(async (req, res, next) => {
    const { error, value } = queryWithPagiValidator.validate(req.query);
    if (error) {
        throw new BadReqest(error.message);
    }

    const { query, page, page_size } = value;
    const pagi = pagination(page, page_size);

    const items = await Course.aggregate()
        .match({ "name": { $regex: query, $options: "i" } })
        .project({
            _id: 1,
            name: 1,
            cover: 1,
            public: 1,
            subscriber_count: { $size: "$subscriber" },
            view: 1
        })
        .skip(pagi.skip)
        .limit(pagi.limit)
        .exec()

    const items_count = await Course.countDocuments({
        name: {
            $regex: query, $options: "i"
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