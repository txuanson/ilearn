const { STATIC_PATH } = require("../../configs/env");
const compress = require("../../helpers/compress");
const { asyncCatch } = require("../../helpers/utils");


const uploadCover = asyncCatch(async(req, res, next) =>{
    if (!req.file)
        throw new BadReqest("Course's cover needed!");

    const filepath = `${STATIC_PATH}/storage/cover.jpeg`;
    await compress(req.file.buffer, filepath).catch(err => {
        throw err;
    });

    res.send("Success!");
})

module.exports = {
    uploadCover
}