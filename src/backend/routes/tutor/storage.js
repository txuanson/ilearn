const express = require('express');
const uploadContentImage = require('../../controllers/storage');
const upload = require('../../helpers/upload');
const router = express.Router();
const contentImgUploadMiddleware = upload.single('content');

router.put('/', contentImgUploadMiddleware, uploadContentImage);

module.exports = router;