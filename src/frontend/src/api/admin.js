import callApi from "./callApi";

export const getAllCategoryAdmin = () =>
    callApi({ url: "/admin/category", method: 'GET' });

export const editCategory = (id, data) =>
    callApi({ url: `/admin/category/${id}`, method: 'PATCH', data });

export const deleteCategory = (id) =>
    callApi({ url: `/admin/category/${id}`, method: 'DELETE'});

export const addCategory = (data) =>
    callApi({ url: `/admin/category`, method: 'POST', data});