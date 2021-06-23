const Course = require("../models/Course");
const Section = require("../models/Section");
const { zoomDeleteMeeting } = require("../services/zoom.service");
const { removeUnusedFile, getModelByName } = require("./utils");

const deleteCourseHelper = async (user_id, course_id) => {
    const course = await Course.findByIdAndDelete(course_id).exec();
    await removeUnusedFile([...course.storage, course.cover]);
    await Promise.all(course.section.map(async e => {
        if (e.section_type == "Section")
            await deleteSectionContent(user_id, e.section_id);
        else
            await deleteQuizContent(e.section_id);
    }))
}

const deleteSectionHelper = async (user_id, section_id) => {
    await deleteSectionContent(user_id, section_id);
    await Course.updateOne({ 
        "section.section_id": section_id 
    }
        ,
        {
            $pull: {
                section: {
                    section_id: section_id
                }
            }
        }
    ).exec()
}

const deleteSectionContent = async (user_id, section_id) => {
    const section = await Section.findByIdAndDelete(section_id).exec();
    await removeUnusedFile(section.storage);
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