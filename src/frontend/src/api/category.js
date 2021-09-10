import callApi from "./callApi";

export const getAllCategory = () =>
    callApi({ url: "/category", method: 'GET' });