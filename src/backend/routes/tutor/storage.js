const express = require('express');
const uploadContentImage = require('../../controllers/storage');
const upload = require('../../helpers/upload');
const router = express.Router();
const contentImgUploadMiddleware = upload.single('content');

/**
 * @openapi
 * /tutor/storage:
 *   put:
 *     summary: Upload course/section content (temporarily)
 *     description: Use for the tutor's editor to be able to insert images to the document!
 *     tags:
 *       - tutor
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               content:
 *                 type: string
 *                 format: binary
 *                 required: true
 */
router.put('/', contentImgUploadMiddleware, uploadContentImage);

module.exports = router;