import callApi from "./callApi";

export const searchCourse = (data) => 
    callApi({url: `/course/search?query=${data}`, method: 'GET'});