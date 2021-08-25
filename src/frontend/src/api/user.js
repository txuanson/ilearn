import callApi from "./callApi";

export const getProfileUser = () => 
    callApi({url: '/user/profile/min', method: 'GET'});

export const getSectionInfo = (course_id, section_id) => 
    callApi({url: `/user/section/${course_id}/${section_id}`, method: 'GET'});

export const joinCourse = (course_id) => 
    callApi({url: `/user/course/${course_id}/join`, method: 'GET'});
