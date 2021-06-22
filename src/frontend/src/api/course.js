import handleApi from "./handleApi";

export const getCourseByCategory = (query) => 
    handleApi({url: `/course?field=category&query=${query}&page=1&page_size=12`, method: 'GET'});