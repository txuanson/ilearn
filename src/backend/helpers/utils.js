const { PAGE_SIZE } = require("../config/env");
const { HttpError, STATUS_CODE } = require("./response");

const asyncCatch = (fn) => (req, res, next) => fn(req, res, next).catch(next);

const errorHandler = (err, req, res, next) => {
    if (err instanceof HttpError)
        return res.status(err.getCode()).json({
            message: err.message
        });

    console.error(err);
    res.status(STATUS_CODE.INTERNAL_SERVER_ERROR).json({
        message: 'Error! Please try again!'
    })
}

const getModelByName = (name) => {
    return require(`../models/${name}`);
}

const pagination = (page, pageSize = PAGE_SIZE) => {
    return {
        skip: ((page >= 1 ? page : 1) - 1) * pageSize,
        limit: pageSize
    }
}

module.exports = {
    asyncCatch,
    errorHandler,
    getModelByName,
    pagination
}