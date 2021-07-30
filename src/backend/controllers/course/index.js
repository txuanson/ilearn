const mongoose = require("mongoose");
const { BadReqest, Forbidden, NotFound } = require("../../helpers/response");
const { asyncCatch, pagination, filterImageUrl, removeTempFlag, removeUnusedFile } = require("../../helpers/utils");
const Course = require('../../models/Course');
const courseCreateValidator = require("../../validators/courseCreate.validator");
const getCourseValidator = require("../../validators/getCourseByFilter.validator");
const { v4: uuidv4 } = require('uuid');
const { STATIC_PATH, HOST } = require("../../configs/env");
const compress = require("../../helpers/compress");
const { Admin } = require("../../configs/role");
const { deleteCourseHelper } = require("../../helpers/query");
const getOwnedCourseValidator = require("../../validators/getOwnedCourse.validator");


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
        .lookup({ from: 'accounts', localField: 'tutor', foreignField: '_id', as: 'tutor' })
        .lookup({ from: 'categories', localField: 'category', foreignField: '_id', as: 'category' })
        .unwind('category')
        .unwind('tutor')
        .project({
            _id: 1,
            name: 1,
            cover: { $concat: [HOST, '/', '$cover'] },
            public: 1,
            tutor: {
                _id: 1,
                name: 1
            },
            category: 1,
            subscriber_count: { $size: "$subscriber" }
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
        .lookup({ from: 'categories', localField: 'category', foreignField: '_id', as: 'category' })
        .lookup({ from: 'accounts', localField: 'tutor', foreignField: '_id', as: 'tutor' })
        .lookup({ from: 'sections', localField: 'sections.section_id', foreignField: '_id', as: 'tutor' })
        .unwind('category')
        .unwind('tutor')
        .project({
            _id: 1,
            name: 1,
            public: 1,
            content: 1,
            tutor: {
                _id: 1,
                name: 1
            },
            cover: { $concat: [HOST, '/', '$cover'] },
            category: 1,
            subscriber_count: { $size: "$subscriber" }
        })
        .exec();

    if (courseInfo.length == 0) throw new NotFound('Course not found!');

    res.send(courseInfo[0]);
})

const getOwnedCourse = asyncCatch(async (req, res, next) => {
    const { error, value } = getOwnedCourseValidator.validate(req.query);
    if (error) {
        throw new BadReqest(error.message);
    }

    const { query, page, page_size } = value;
    const user_id = req.user_data._id;
    const pagi = pagination(page, page_size);

    const items = await Course.aggregate()
        .match({ "tutor": user_id ,"name": { $regex: query, $options: "i" } })
        .project({
            _id: 1,
            name: 1,
            cover: { $concat: [HOST, '/', '$cover'] },
            public: 1,
            subscriber_count: { $size: "$subscriber" }
        })
        .limit(pagi.limit)
        .skip(pagi.skip)
        .exec()

    const items_count = await Course.countDocuments({
        tutor: user_id,
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
        cover: filename
    });

    res.send(newCourse._id);
});

const editCourse = asyncCatch(async (req, res, next) => {
    const course_id = req.params.course_id;
    const course = await Course.findById(course_id).exec();
    if (!course) throw new NotFound('Course not found!');

    if (req.user_data.role !== Admin && !course.tutor.equals(req.user_data._id))
        throw new Forbidden('You do not have permission to this course');

    const { error, value } = courseCreateValidator.validate(req.body);
    if (error)
        throw new BadReqest(error.message);

    const old_img = filterImageUrl(course.content);
    const new_img = filterImageUrl(value.content);

    const img_to_del = old_img.filter(e => !new_img.includes(e));
    const img_to_update = new_img.filter(e => !old_img.includes(e));

    await removeUnusedFile(img_to_del);
    await removeTempFlag(img_to_update);

    await Course.updateOne({ _id: course_id }, {
        ...value
    });

    if (req.files?.cover) {
        const filename = `storage/${uuidv4()}.jpeg`;
        const filepath = `${STATIC_PATH}/${filename}`;
        await compress(req.files.cover[0].buffer, filepath).catch(err => {
            console.log(err);
            throw err;
        });
        await removeUnusedFile([course.cover]);
        await Course.updateOne({ _id: course_id }, { cover: filename });
    }

    res.send("Success!");
});

const deleteCourse = asyncCatch(async (req, res, next) => {
    const course_id = req.params.course_id;
    const course = await Course.findById(course_id).exec();

    if (!course) throw new NotFound('Course not found!');
    if (req.user_data.role !== Admin && !course.tutor.equals(req.user_data._id))
        throw new Forbidden('You do not have permission to this course');

    await deleteCourseHelper(course.tutor, course_id);

    res.send("Success!");
})

const listSubscriber = asyncCatch(async (req, res, next) => {
    const course_id = req.params.course_id;
    const items = await Course.findById(course_id, "-_id subscriber")
        .select('-_id subscriber')
        .populate("subscriber", "_id name avatar")
        .lean()
        .exec();
    res.send({
        items: items?.subscriber ?? []
    })
})

const listQueue = asyncCatch(async (req, res, next) => {
    const course_id = req.params.course_id;
    const items = await Course.findById(course_id, "-_id queue")
        .select('-_id queue')
        .populate("queue", "_id name avatar")
        .lean()
        .exec();
    res.send({
        items: items?.queue ?? []
    })
})

const listBanned = asyncCatch(async (req, res, next) => {
    const course_id = req.params.course_id;
    const items = await Course.findById(course_id, "-_id banned")
        .select('-_id banned')
        .populate("banned.account_id", "_id name avatar")
        .lean()
        .exec();
    res.send({
        items: items?.banned ?? []
    })
})

const listSection = asyncCatch(async (req, res, next) => {
    const course_id = req.params.course_id;
    const items = await Course.findById(course_id)
        .select('-_id section')
        .populate('section.section_id', '_id, topic')
        .lean()
        .exec();
    console.log(items)
    res.send({
        items: items?.section ?? []
    });
})

module.exports = {
    getCourseBy: getCourseBy,
    getOwnedCourse,
    info: getCourseInfo,
    create: createCourse,
    delete: deleteCourse,
    edit: editCourse,
    listSubscriber,
    listQueue,
    listBanned,
    listSection
}