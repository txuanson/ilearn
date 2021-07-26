import callApi from "./callApi";

export const postLogin = (data) => 
    callApi({url: '/auth/login', method: 'POST', data});

export const postRegister = (data) => 
    callApi({url: '/auth/register', method: 'POST', data});