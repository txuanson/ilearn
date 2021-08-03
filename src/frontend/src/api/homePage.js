import callApi from "./callApi";

export const getAllCategory = () => 
    callApi({url: '/category', method: 'GET'});

    
export const getCategoryID = (query) => 
    callApi({url: `/course/?field=category&query=${query}`, method: 'GET'});
