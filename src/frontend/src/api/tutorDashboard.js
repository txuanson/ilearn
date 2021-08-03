import callApi from "./callApi";

export const listCourse = (page, query) =>
    callApi({ url: `/tutor/course?query=${query}&page=${page}`, method: 'GET' });

export const listSection = (course_id) =>
    callApi({ url: `/tutor/course/${course_id}/section`, method: 'GET' });

export const uploadContentImage = (data) =>
    callApi({ url: `/tutor/storage`, method: 'PUT', data: data, option: { headers: { 'Content-Type': 'multipart/form-data' } } });

export const createCourse = (data) =>
    callApi({ url: '/tutor/course', method: 'POST', data: data, option: { headers: { 'Content-Type': 'multipart/form-data' } } });

export const deleteCourse = (course_id) =>
    callApi({ url: `/tutor/course/${course_id}`, method: 'DELETE' });