const express = require('express');
const router = express.Router();
const account = require('../../controllers/account');

/**
 * @openapi
 * paths:
 *   /user/account/attachZoom:
 *     post:
 *       summary: Link Zoom account to this iLearn account.
 *       tags:
 *         - user
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               properties:
 *                 access_code:
 *                   type: string
 *               required:
 *                 - access_code
 *   /user/account/history:
 *     get:
 *       summary: Get learning history.
 *       tags:
 *         - user
 */
router.post('/attachZoom', account.upgrade);
router.get('/history', account.getHistory);

module.exports = router;