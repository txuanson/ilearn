import callApi from "./callApi";

export const listCourse = () =>
    callApi({ url: '/tutor/course', method: 'GET' });

export const listSection = (course_id) =>
    callApi({ url: `/tutor/course/${course_id}/section`, method: 'GET' });

export const uploadContentImage = (data) =>
    callApi({ url: `/tutor/storage`, method:'PUT', data: data, option: { headers: { 'Content-Type': 'multipart/form-data' } } });

export const createCourse = (data) =>
    callApi({ url: '/tutor/course', method: 'POST', data: data, option: { headers: { 'Content-Type': 'multipart/form-data' } } });