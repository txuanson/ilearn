const { Admin } = require("../../configs/role");
const { deleteSectionHelper } = require("../../helpers/query");
const { BadReqest, NotFound, Forbidden } = require("../../helpers/response");
const { asyncCatch, filterImageUrl, removeTempFlag, removeUnusedFile } = require("../../helpers/utils");
const Course = require("../../models/Course");
const Section = require("../../models/Section");
const { zoomCreateMeeting, zoomEditMeeting } = require("../../services/zoom.service");
const sectionCreateValidator = require("../../validators/sectionCreate.Validator");
const sectionEditValidator = require("../../validators/sectionEdit.Validator");
const mongoose = require('mongoose');
const Account = require("../../models/Account");

const getSectionWithTutor = asyncCatch(async (req, res, next) => {
    const section_id = req.params.section_id;
    const section = await Section.findById(section_id)
        .select("_id topic content duration start_time video")
        .exec();
    if (!section) throw new NotFound('Section not found!');
    res.send(section);
})

const getSectionInfo = asyncCatch(async (req, res, next) => {
    const { course_id, section_id } = req.params;
    if (!course_id || !section_id)
        throw new NotFound("Section not found!");

    const course = await Course.findById(course_id)
        .select("name tutor public subscriber banned sections.section sections.section_type")
        .populate("sections.section", "_id topic")
        .lean()
        .exec();

    if (!course)
        throw new NotFound("Course not found!");

    if (course.tutor != req.user_data._id &&
        (course.banned.indexOf(req.user_data._id) != -1 ||
            (course.public == false && course.subscriber.indexOf(req.user_data._id) == -1)))
        throw new Forbidden("You have no rights to access this course!");

    delete course.banned;
    delete course.subscriber;

    const section = await Section.findOne({ _id: section_id})
        .select("-meeting_id")
        .lean()
        .exec();

    if (!section)
        throw new NotFound("Section not found!");

    if (req.user_data._id == course.tutor)
        delete section.join_url;
    else
        delete section.start_url;
    delete course.tutor;

    res.send({ course, section });

    await Account.updateOne({ _id: req.user_data._id }, {
        $pull: {
            history: {
                course_id: course_id
            }
        }
    }).exec();
    await Account.updateOne({ _id: req.user_data._id }, {
        $push: {
            history: {
                course_id: course_id,
                section_id: section_id
            }
        }
    }).exec();
});

const createSection = asyncCatch(async (req, res, next) => {
    const { error, value } = sectionCreateValidator.validate(req.body);
    if (error)
        throw new BadReqest(error.message);

    const course = await Course.findById(value.course_id).exec();
    if (!course) throw new NotFound('Course not found!');
    if (req.user_data.role !== Admin && !course.tutor.equals(req.user_data._id))
        throw new Forbidden('You do not have permission to this course');

    const meeting = await zoomCreateMeeting(course.tutor, {
        topic: value.topic,
        duration: value.duration,
        start_time: value.start_time
    });

    const content = filterImageUrl(value.content);
    await removeTempFlag(content);

    const newSection = await Section.create({
        topic: value.topic,
        course_id: value.course_id,
        content: value.content,
        join_url: meeting.join_url,
        start_url: meeting.start_url,
        meeting_id: meeting.meeting_id,
        start_time: value.start_time,
        duration: value.duration,
        video: value.video
    })

    await Course.updateOne({ _id: value.course_id }, {
        "$push": {
            sections: {
                section: newSection._id,
                section_type: 'Section'
            }
        }
    })
    res.send(newSection._id);
})

const editSection = asyncCatch(async (req, res, next) => {
    const section_id = new mongoose.Types.ObjectId(req.params.section_id);
    const { error, value } = sectionEditValidator.validate(req.body);
    if (error)
        throw new BadReqest(error.message);

    const section = await Section
        .findById(section_id)
        .exec();

    const course = await Course
        .findOne({ "sections.section": section_id })
        .select('-content -description')
        .exec();

    if (!section || !course) throw new NotFound('Not found!');
    if (req.user_data.role !== Admin && !course.tutor.equals(req.user_data._id))
        throw new Forbidden('You do not have permission to this course');

    const old_img = filterImageUrl(section.content);
    const new_img = filterImageUrl(value.content);

    const img_to_del = old_img.filter(e => !new_img.includes(e));
    const img_to_update = new_img.filter(e => !old_img.includes(e));

    await removeUnusedFile(img_to_del);
    await removeTempFlag(img_to_update);

    let meeting = {};
    if (value.topic != section.topic || value.duration != section.duration || value.start_time != section.duration) {
        meeting = await zoomEditMeeting(course.tutor, section.meeting_id, {
            topic: value.topic,
            duration: value.duration,
            start_time: value.start_time
        });
    }

    await Section.updateOne({ _id: section_id }, {
        ...value,
        ...meeting
    })

    res.send("Success!");
})

const deleteSection = asyncCatch(async (req, res, next) => {
    const section_id = new mongoose.Types.ObjectId(req.params.section_id);
    const section = await Section
        .findById(section_id)
        .select('-content').exec();
    const course = await Course
        .findOne({ "sections.section": section_id })
        .select('-content')
        .exec();

    if (!section || !course) throw new NotFound('Not found!');
    if (req.user_data.role !== Admin && !course.tutor.equals(req.user_data._id))
        throw new Forbidden('You do not have permission to this course');

    await deleteSectionHelper(course.tutor, section_id);

    res.send("Success!");
})

module.exports = {
    getSectionWithTutor,
    get: getSectionInfo,
    create: createSection,
    edit: editSection,
    delete: deleteSection
}