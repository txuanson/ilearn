import callApi from "./callApi";

export const getUserProfile = (user_id) =>
    callApi({ url: `/profile/${user_id}`, method: 'GET' });