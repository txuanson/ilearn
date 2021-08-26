import callApi from "./callApi";

export const searchCourse = (data) => 
    callApi({url: '/course/search', method: 'GET', data});