import callApi from "./callApi";

export const getCourseInfo = (course_id) =>
    callApi({url: `/user/course/${course_id}`, method:'GET'});