const { BadReqest, NotFound } = require("../../helpers/response");
const { asyncCatch, pagination } = require("../../helpers/utils");
const cateCreateValidator = require("../../validators/cateCreate.validator");
const Category = require('../../models/Category');
const Course = require("../../models/Course");
const { PAGE_SIZE } = require("../../configs/env");
const queryWithPagiValidator = require("../../validators/queryWithPagi.validator");

const getCategory = asyncCatch(async (req, res, next) => {
    const { error, value } = queryWithPagiValidator.validate(req.query);
    if (error) {
        throw new BadReqest(error.message);
    }

    const { query, page, page_size } = value;
    const pagi = pagination(page, page_size);

    const items = await Category.aggregate()
        .match({
            "name": { $regex: req.query.query, $options: "i" }
        })
        .lookup({ from: 'courses', localField: '_id', foreignField: 'category', as: 'courses' })
        .project({
            _id: 1,
            name: 1,
            courses_count: { $size: '$courses' }
        })
        .skip(pagi.skip)
        .limit(pagi.limit)
        .exec()

    const items_count = await Category.countDocuments({
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

const createCategory = asyncCatch(async (req, res, next) => {
    const { error, value } = cateCreateValidator.validate(req.body);
    if (error)
        throw new BadReqest(error.message);

    await Category.create(req.body);
    res.send("Success");
})

const editCategory = asyncCatch(async (req, res, next) => {
    if (!req.params.category_id) throw new NotFound('Category not found!');

    const { error, value } = cateCreateValidator.validate(req.body);
    if (error)
        throw new BadReqest(error.message);

    await Category.updateOne({ _id: req.params.category_id }, { name: value.name });

    res.send("Success!");
})

const removeCategory = asyncCatch(async (req, res, next) => {
    if (!req.params.category_id) throw new NotFound('Category not found!');

    await Category.deleteOne({ _id: req.params.category_id });
    await Course.updateMany({ category: req.params.category_id }, { category: null }); // can be set to Uncategorize? (special category)
    res.send("Success!");
})

module.exports = {
    get: getCategory,
    create: createCategory,
    remove: removeCategory,
    edit: editCategory
}