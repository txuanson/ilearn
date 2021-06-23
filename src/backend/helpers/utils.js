const { PAGE_SIZE, STATIC_PATH } = require("../configs/env");
const { HttpError, STATUS_CODE } = require("./response");
const Storage = require('../models/Storage');
const fs = require('fs-extra');

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

const getModelByName = (name) => require(`../models/${name}`);


const pagination = (page, pageSize = PAGE_SIZE) => {
    return {
        skip: ((page >= 1 ? page : 1) - 1) * pageSize,
        limit: pageSize
    }
}

const filterImg = /^courses\/\d+\/[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}.jpeg$/g;
const filterImageUrl = (content) => content.match(filterImg) ?? [];

const removeTempFlag = async (path = []) => {
    await Storage.deleteMany({ path: { $in: path } }).exec();
}

const removeUnusedFile = (path = []) => Promise.all(
    path.map(file =>
        new Promise((resolve, reject) => {
            try {
                fs.removeSync(`${STATIC_PATH}/${file}`);
                console.log(`Deleted: ${path}`);
                resolve();
            }
            catch (err) {
                console.error(err);
                reject(err);
            }
        })));

module.exports = {
    asyncCatch,
    errorHandler,
    getModelByName,
    pagination,
    filterImageUrl,
    removeTempFlag,
    removeUnusedFile
}