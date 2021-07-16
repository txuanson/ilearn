import handleApi from './handleApi';

export const getAllCategory = () => 
    handleApi({url: `/user/account/attachZoom`, method: 'GET'});

