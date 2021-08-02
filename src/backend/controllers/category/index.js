const { asyncCatch } = require("../../helpers/utils");
const Category = require("../../models/Category");

const getCategory = asyncCatch(async (req, res, next) => {
    const items = await Category.find()
    .select("name")
    .lean()
    .exec();
    res.send(items); 
});

module.exports = {
    get: getCategory
}