import callApi from "./callApi";

export const getSearchCategoryAdmin = (key) =>
    callApi({ url: `/admin/category?query=${key}`, method: 'GET' });

export const editCategory = (id, data) =>
    callApi({ url: `/admin/category/${id}`, method: 'PATCH', data });

export const deleteCategory = (id) =>
    callApi({ url: `/admin/category/${id}`, method: 'DELETE'});

export const addCategory = (data) =>
    callApi({ url: `/admin/category`, method: 'POST', data});

export const getUser = (key) =>
    callApi({ url: `/admin/user?query=${key}`, method: 'GET'});

export const getCourseAdmin = (key) =>
    callApi({url: `/admin/course/?query=${key}`, method:'GET'});