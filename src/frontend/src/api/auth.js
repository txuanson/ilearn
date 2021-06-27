import handleApi from "./handleApi";

export const postLogin = (data) => 
    handleApi({url: '/auth/login', method: 'POST', data});

export const postRegister = (data) => 
    handleApi({url: '/auth/register', method: 'POST', data});