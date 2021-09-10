const Comment = require("../models/Comment");
const Course = require("../models/Course");
const Section = require("../models/Section");
const { zoomDeleteMeeting } = require("../services/zoom.service");
const { removeUnusedFile, filterImageUrl } = require("./utils");

const deleteCourseHelper = async (user_id, course_id) => {
    const course = await Course.findByIdAndDelete(course_id).exec();
    await removeUnusedFile([...filterImageUrl(course.content), course.cover]);
    await Promise.all(course.sections.map(async e => {
        if (e.section_type == "Section")
            await deleteSectionContent(user_id, e.section);
        else
            await deleteQuizContent(e.section);
    }))
}

const deleteSectionHelper = async (user_id, section_id) => {
    await deleteSectionContent(user_id, section_id);
    await Course.updateOne({
        "sections.section": section_id
    }
        ,
        {
            $pull: {
                sections: {
                    section: section_id
                }
            }
        }
    ).exec()
    await Comment.deleteMany({ section_id: section_id }).exec();
}

const deleteSectionContent = async (user_id, section_id) => {
    const section = await Section.findByIdAndDelete(section_id).exec();
    await removeUnusedFile(filterImageUrl(section.content));
    // delete zoom meeting
    await zoomDeleteMeeting(user_id, section.meeting_id);
}

const deleteQuizContent = async (quiz_id) => {
    // not implement yet
}

module.exports = {
    deleteCourseHelper,
    deleteSectionHelper,
    deleteSectionContent
}
