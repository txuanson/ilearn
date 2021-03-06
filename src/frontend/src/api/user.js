
import callApi from "./callApi";

export const getProfileUser = () => 
    callApi({url: '/user/profile/min', method: 'GET'});

export const getSectionInfo = (course_id, section_id) => 
    callApi({url: `/user/section/${course_id}/${section_id}`, method: 'GET'});

export const joinCourse = (course_id) => 
    callApi({url: `/user/course/${course_id}/join`, method: 'GET'});

export const subscribeCourse = (course_id) => 
    callApi({url: `/user/course/${course_id}/subscribe`, method: 'PATCH'});

export const unsubscribeCourse = (course_id) => 
    callApi({url: `/user/course/${course_id}/unsubscribe`, method: 'PATCH'});

export const getUserInfo = (user_id) =>
    callApi({ url: `/profile/${user_id}`, method: 'GET' });

export const putAvatar = (data) =>
    callApi({ url: `/user/profile/avatar`, method: 'PUT', data });

export const patchProfile = (data) =>
    callApi({ url: `/user/profile`, method: 'PATCH', data });

export const getHistory = () =>
    callApi({ url: `/user/account/history`, method: 'GET'});
   
export const getAllCommentSection = (section_id,page, page_size) =>
    callApi({ url: `/user/comment/?section_id=${section_id}&page=${page}&page_size=${page_size}`, method: 'GET'});

export const writeCommentSection = (data) =>
    callApi({ url: `/user/comment`, method: 'POST', data});

export const repCommentSection = (data) =>
    callApi({ url: `/user/comment/reply`, method: 'POST', data});