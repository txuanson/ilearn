import callApi from "./callApi";

export const listCourse = () => 
    callApi({url: '/tutor/course', method: 'GET'});