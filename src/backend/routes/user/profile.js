const express = require('express');
const router = express.Router();
const account = require("../../controllers/account");
const upload = require('../../helpers/upload');
const authMiddleware = require('../../middlewares/auth.middleware');
const avatarUploadMiddleware = upload.single('avatar');
/**
 * @openapi
 * 
 * /user/profile/min:
 *   get:
 *     summary: Get heaeder min profile
 *     tags:
 *       - user
 * /user/profile:
 *   patch:
 *     summary: Edit user profile
 *     tags:
 *       - user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *               name:
 *                 type: string
 *               bio:
 *                 type: string
 *             required:
 *               - name
 *               - bio
 * /user/profile/avatar:
 *   put:
 *     summary: Update user avatar
 *     tags:
 *       - user
 *     requestBody:
 *       content:
 *         application/form-data:
 *           schema:
 *               properties:
 *                 avatar:
 *                   type: images
 *               required:
 *                 - avatar
 */

router.get('/min', account.getMinProfile);
router.patch('/', account.editProfile);
router.put('/avatar', avatarUploadMiddleware, account.updateAvatar);
module.exports = router;