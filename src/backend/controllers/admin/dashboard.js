const { asyncCatch } = require("../../helpers/utils");
const Account = require("../../models/Account");
const Course = require("../../models/Course");

const dashboard = asyncCatch(async (req, res, next) => {
    const date = new Date();
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const courseCount = await Course.countDocuments();
    const newCourseCount = await Course.countDocuments({ createdAt: { $gte: firstDay } });
    const accountCount = await Account.countDocuments();
    const newAccountCount = await Account.countDocuments({ createdAt: { $gte: firstDay } });
    const newCourse = await Course.aggregate()
        .lookup({ from: 'categories', localField: 'category', foreignField: '_id', as: 'category' })
        .unwind("category")
        .project({
            name: 1,
            category: {
                _id: 1,
                name: 1
            },
            create_at: "$createdAt",
            subscriber: { $size: "$subscriber" }
        });
    res.send({
        course_count: courseCount,
        new_course_count: newCourseCount,
        account_count: accountCount,
        new_account_count: newAccountCount,
        new_course: newCourse
    })
})

module.exports = dashboard;