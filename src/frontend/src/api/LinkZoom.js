import handleApi from './handleApi';

// {access_code: xxx}

export const postAttachZoom = (data) => 
    handleApi({url: `/user/account/attachZoom`, method: 'POST', data});

