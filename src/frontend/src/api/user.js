import callApi from "./callApi";

export const getProfileUser = () => 
    callApi({url: '/user/profile/min', method: 'GET'});

export const getUserInfo = (user_id) =>
    callApi({ url: `/profile/${user_id}`, method: 'GET' });

export const putdAvatar = (data) =>
    callApi({ url: `/user/profile/avatar`, method: 'PUT', data: data, option: { headers: { 'Content-Type': 'multipart/form-data' } } });

export const patchProfile = (data) =>
    callApi({ url: `/user/profile`, method: 'PATCH', data: data, option: { headers: { 'Content-Type': 'multipart/form-data' } } });