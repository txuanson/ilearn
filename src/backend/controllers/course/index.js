const { BadReqest } = require("../../helpers/response");
const { asyncCatch, pagination } = require("../../helpers/utils");
const Course = require('../../models/course');
const getCourseValidator = require("../../validators/getCourse.validator");

const getCourseBy = asyncCatch(async (req, res, next) => {
    const { error, value } = getCourseValidator.validate(req.query);
    if (error)
        throw new BadReqest(error.message);

    const {field, page, page_size, query } = value;
    const filter = {};
    filter[field] = query;
    const pagi = pagination(page, page_size);
    console.log(pagi);
    const items = await Course.aggregate()
        .match(filter)
        .project({
            _id: 1,
            name: 1,
            user_limit: 1,
            cover: 1,
            public: 1,
            subscriber_count: { $size: "$subscriber" }
        })
        .limit(pagi.limit)
        .skip(pagi.skip)
        .exec();

    const itemsCount = await Course.countDocuments({
        category: query
    })
    res.send({
        items,
        items_count: itemsCount
    })

})

module.exports = {
    getCourseBy: getCourseBy
}