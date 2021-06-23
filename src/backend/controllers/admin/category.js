const { BadReqest, NotFound } = require("../../helpers/response");
const { asyncCatch, pagination } = require("../../helpers/utils");
const cateCreateValidator = require("../../validators/cateCreate.validator");
const Category = require('../../models/Category');
const Course = require("../../models/Course");
const { PAGE_SIZE } = require("../../configs/env");

const createCategory = asyncCatch(async (req, res, next) => {
    const { error, value } = cateCreateValidator.validate(req.body);
    if (error)
        throw new BadReqest(error.message);

    await Category.create(req.body);
    res.send("Success");
})

const findCategory = asyncCatch(async (req, res, next) => {
    const pagi = pagination(req.query.page, parseInt(req.query.page_size, 10));
    const name = req.query.name ?? "";

    const category = await Category.find({
        name: {
            $regex: name, $options: "i"
        }
    })
        .select("_id name")
        .limit(pagi.limit)
        .skip(pagi.skip)
        .exec();

    const itemsCount = await Category.countDocuments({
        name: {
            $regex: name, $options: "i"
        }
    })
        .exec();
        
    res.send({
        items: category,
        items_count: itemsCount
    });
});

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

    res.send("Success!");
})

module.exports = {
    create: createCategory,
    find: findCategory,
    remove: removeCategory,
    edit: editCategory
}