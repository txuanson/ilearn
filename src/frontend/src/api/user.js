import callApi from "./callApi";

export const getProfileUser = () => 
    callApi({url: '/user/profile/min', method: 'GET'});
