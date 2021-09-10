const sharp = require('sharp');
const { InteralServerError } = require('./response');

const imageCfg = {
    quality: 90,
    chromaSubsampling: '4:4:4',
    force: true,
    mozjpeg: true
};

/** 
 * Copyright Tran Xuan Son
 * 
 * Compress and store image in Buffer to path given in params
 *
 * @param {Buffer} image Buffer of the input image
 * @param {String} path New path of the upload image
 */
const compress = (image, path) =>
    new Promise((resolve, reject) => {
        try {
            sharp(image)
                .jpeg(imageCfg)
                .toFile(path, (err, info) => {
                    if (err) {
                        console.error(err.message);
                        reject(new InteralServerError("Image Process Error"));
                    }
                    resolve();
                })
        } catch (err) {
            reject(err);
        }
    })

module.exports = compress;