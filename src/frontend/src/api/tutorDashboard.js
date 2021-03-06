import callApi from "./callApi";

export const listCourse = (page, query) =>
    callApi({ url: `/tutor/course?query=${query}&page=${page}&page_size=10`, method: 'GET' });

export const listSection = (course_id) =>
    callApi({ url: `/tutor/course/${course_id}/section`, method: 'GET' });

export const listUser = (course_id, type) =>
    callApi({ url: `/tutor/course/${course_id}/${type.toLowerCase()}`, method: 'GET' });

export const uploadContentImage = (data) =>
    callApi({ url: `/tutor/storage`, method: 'PUT', data: data, option: { headers: { 'Content-Type': 'multipart/form-data' } } });

export const createCourse = (data) =>
    callApi({ url: '/tutor/course', method: 'POST', data: data, option: { headers: { 'Content-Type': 'multipart/form-data' } } });

export const editCourse = (course_id, data) =>
    callApi({ url: `/tutor/course/${course_id}`, method: 'PATCH', data: data, option: { headers: { 'Content-Type': 'multipart/form-data' } } });

export const deleteCourse = (course_id) =>
    callApi({ url: `/tutor/course/${course_id}`, method: 'DELETE' });

export const courseActionWithType = ({ course_id, action, user_id }) =>
    callApi({ url: `/tutor/course/${course_id}/${action}`, method: 'PATCH', data: { user_id } });