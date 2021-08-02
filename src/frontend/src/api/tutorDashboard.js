import callApi from "./callApi";

export const listCourse = () =>
    callApi({ url: '/tutor/course', method: 'GET' });

export const listSection = (course_id) =>
    callApi({ url: `/tutor/course/${course_id}/section`, method: 'GET' });