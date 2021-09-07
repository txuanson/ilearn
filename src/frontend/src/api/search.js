import callApi from "./callApi";

export const searchCourse = (data, page, page_size) => 
    callApi({url: `/course/search?query=${data}&page=${page}&page_size=${page_size}`, method: 'GET'});