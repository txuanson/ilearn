import handleApi from "./handleApi";

export const postLogin = (data) => 
    handleApi({url: '/auth/login', method: 'POST', data});