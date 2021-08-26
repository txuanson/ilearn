import callApi from "./callApi";

export const getProfileUser = () => 
    callApi({url: '/user/profile/min', method: 'GET'});

export const getSectionInfo = (course_id, section_id) => 
    callApi({url: `/user/section/${course_id}/${section_id}`, method: 'GET'});

export const joinCourse = (course_id) => 
    callApi({url: `/user/course/${course_id}/join`, method: 'GET'});

export const subscribeCourse = (course_id) => 
    callApi({url: `/user/course/${course_id}/subscribe`, method: 'PATCH'});

export const getUserInfo = (user_id) =>
    callApi({ url: `/profile/${user_id}`, method: 'GET' });

export const putAvatar = (data) =>
    callApi({ url: `/user/profile/avatar`, method: 'PUT', data: data, option: { headers: { 'Content-Type': 'multipart/form-data' } } });

export const patchProfile = (data) =>
    callApi({ url: `/user/profile`, method: 'PATCH', data: data, option: { headers: { 'Content-Type': 'multipart/form-data' } } });