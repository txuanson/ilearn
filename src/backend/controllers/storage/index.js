const { BadReqest } = require("../../helpers/response");
const { asyncCatch } = require("../../helpers/utils");
const { v4: uuidv4 } = require('uuid');
const compress = require("../../helpers/compress");
const { HOST, STATIC_PATH } = require("../../configs/env");
const Storage = require("../../models/Storage");

const uploadContentImage = asyncCatch(async(req, res, next)=>{
    if(!req.file){
        throw BadReqest("Content image required!");
    }

    const filename = `storage/${uuidv4()}.jpeg`;
    const filepath = `${STATIC_PATH}/${filename}`;
    await compress(req.file.buffer, filepath).catch(err => {
        console.log(err);
        throw err;
    });

    await Storage.create({
        path: filename
    });

    res.send(`${HOST}/${filename}`);
})

module.exports = uploadContentImage;
