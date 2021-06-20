const mongoose = require("mongoose");
const { BadReqest, Forbidden, NotFound, Unauthorized } = require("../../helpers/response");
const { asyncCatch, pagination, filterImageUrl, removeTempFlag, removeUnusedFile } = require("../../helpers/utils");
const Course = require('../../models/course');
const courseCreateValidator = require("../../validators/courseCreate.validator");
const getCourseValidator = require("../../validators/getCourseByFilter.validator");
const { v4: uuidv4 } = require('uuid');
const { STATIC_PATH, HOST } = require("../../configs/env");
const compress = require("../../helpers/compress");
const { Admin } = require("../../configs/role");
const fs = require('fs-extra');
const { remove } = require("../../models/storage");
const Storage = require("../../models/storage");
const Section = require("../../models/section");

const getCourseBy = asyncCatch(async (req, res, next) => {
    const { error, value } = getCourseValidator.validate(req.query);
    if (error)
        throw new BadReqest(error.message);

    const { field, page, page_size, query } = value;

    const filter = {};
    filter[field] = new mongoose.Types.ObjectId(query);

    const pagi = pagination(page, page_size);

    const items = await Course.aggregate()
        .match(filter)
        .project({
            _id: 1,
            name: 1,
            cover: 1,
            public: 1,
            subscriber_count: { $size: "$subscriber" },
            section_count: { $size: "$section" }
        })
        .limit(pagi.limit)
        .skip(pagi.skip)
        .exec()

    const itemsCount = await Course.countDocuments(filter)
    res.send({
        items,
        items_count: itemsCount
    })

})

const getCourseInfo = asyncCatch(async (req, res, next) => {
    const course_id = req.params.course_id;
    const courseInfo = await Course.aggregate()
        .match({ _id: new mongoose.Types.ObjectId(course_id) })
        .lookup({ from: 'categories', localField: 'category', foreignField: '_id', as: 'categoryArr' })
        .project({
            _id: 1,
            name: 1,
            public: 1,
            content: 1,
            cover: { $concat: [HOST, '/', '$cover'] },
            category: { $arrayElemAt: ["$categoryArr", 0] },
            subscriber_count: { $size: "$subscriber" },
            section_count: { $size: "$section" }
        })
        .exec();

    if (courseInfo.length == 0) throw new NotFound('Course not found!');

    res.send(courseInfo[0]);
})

const createCourse = asyncCatch(async (req, res, next) => {
    // validations
    if (!req.files?.cover)
        throw new BadReqest("Course's cover needed!");

    const { error, value } = courseCreateValidator.validate(req.body);
    if (error)
        throw new BadReqest(error.message);

    // course cover img process
    const filename = `storage/${uuidv4()}.jpeg`;
    const filepath = `${STATIC_PATH}/${filename}`;
    await compress(req.files.cover[0].buffer, filepath).catch(err => {
        console.log(err);
        throw err;
    });

    // clear course tmp flag
    const contentImg = filterImageUrl(value.content);
    await removeTempFlag(contentImg);

    // save to db
    const newCourse = await Course.create({
        ...value,
        tutor: req.user_data._id,
        cover: filename,
        storage: contentImg ?? []
    });

    res.send(newCourse._id);
});

const editCourse = asyncCatch(async (req, res, next) => {
    const course_id = req.params.course_id;
    const oldCourse = await Course.findById(course_id).exec();
    if (!oldCourse) throw new NotFound('Course not found!');

    if (req.user_data.role !== Admin && !oldCourse.tutor.equals(req.user_data._id))
        throw new Forbidden('You do not have permission to this course');

    const { error, value } = courseCreateValidator.validate(req.body);
    if (error)
        throw new BadReqest(error.message);

    const old_img = oldCourse.storage;
    const new_img = filterImageUrl(value.content) ?? [];

    const img_to_del = old_img.filter(e => !new_img.includes(e));
    const img_to_update = new_img.filter(e => !old_img.includes(e));

    await removeUnusedFile(img_to_del);
    await removeTempFlag(img_to_update);

    await Course.updateOne({ _id: course_id }, {
        ...value,
        storage: new_img
    });

    if (req.files?.cover) {
        const filename = `storage/${uuidv4()}.jpeg`;
        const filepath = `${STATIC_PATH}/${filename}`;
        await compress(req.files.cover[0].buffer, filepath).catch(err => {
            console.log(err);
            throw err;
        });
        await removeUnusedFile([oldCourse.cover]);
        await Course.updateOne({ _id: course_id }, { cover: filename });
    }

    res.send("Success!");
});

const deleteCourse = asyncCatch(async (req, res, next) => {
    const course_id = req.params.course_id;
    const courseInfo = await Course.findById(course_id).exec();

    if (!courseInfo) throw new NotFound('Course not found!');
    if (req.user_data.role !== Admin && !courseInfo.tutor.equals(req.user_data._id))
        throw new Forbidden('You do not have permission to this course');

    await Course.deleteOne({ _id: course_id });

    res.send("Success!");

    await removeUnusedFile([...courseInfo.storage, courseInfo.cover]);
    await Section.deleteMany({ course_id: this._id }).exec();
})

const listSubscriber = asyncCatch(async (req, res, next) => {

})

const listQueue = asyncCatch(async (req, res, next) => {

})

module.exports = {
    getCourseBy: getCourseBy,
    info: getCourseInfo,
    create: createCourse,
    delete: deleteCourse,
    edit: editCourse
}