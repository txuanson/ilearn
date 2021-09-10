import callApi from "./callApi";

export const getSearchCategoryAdmin = (key, page, page_size) =>
    callApi({ url: `/admin/category?query=${key}&page=${page}&page_size=${page_size}`, method: 'GET' });

export const editCategory = (id, data) =>
    callApi({ url: `/admin/category/${id}`, method: 'PATCH', data });

export const deleteCategory = (id) =>
    callApi({ url: `/admin/category/${id}`, method: 'DELETE'});

export const addCategory = (data) =>
    callApi({ url: `/admin/category`, method: 'POST', data});

export const getUser = (key, page, page_size) =>
    callApi({ url: `/admin/user?query=${key}&page=${page}&page_size=${page_size}`, method: 'GET'});

export const getCourseAdmin = (key, page, page_size) =>
    callApi({url: `/admin/course?query=${key}&page=${page}&page_size=${page_size}`, method:'GET'});
    
export const getDashboard = () =>
    callApi({ url: `/admin/dashboard`, method: 'GET'});

export const banAccount = (data) =>
    callApi({ url: `/admin/user/ban`, method: 'POST', data});

export const putCover = (data) =>
    callApi({ url: `/admin/resource`, method: 'PUT', data, option: { headers: { 'Content-Type': 'multipart/form-data' } } });