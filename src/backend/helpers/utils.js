const { HttpError, STATUS_CODE } = require("./response");

const asyncCatch = (fn) => (req, res, next) => fn(req, res, next).catch(next);

const errorHandler = (err, req, res, next) =>{
    if(err instanceof HttpError) 
        return res.status(err.getCode()).json({
            message: err.message
        });
    
    console.error(err);
    res.status(STATUS_CODE.INTERNAL_SERVER_ERROR).json({
        message: 'Lỗi! Hãy thử lại!'
    })
}

export default {
    asyncCatch,
    errorHandler
}