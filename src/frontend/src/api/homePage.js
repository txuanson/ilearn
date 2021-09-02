import callApi from "./callApi";

export const getAllCategory = () => 
    callApi({url: '/category', method: 'GET'});

    
export const getCategoryID = (query) => 
    callApi({url: `/course/?field=category&query=${query}`, method: 'GET'});

export const getCategoryPage = (query, page, page_size) => 
    callApi({url: `/course/?field=category&query=${query}&page=${page}&page_size=${page_size}`, method: 'GET'});