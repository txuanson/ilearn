const express = require('express');
const router = express.Router();
const accountService = require('../../controllers/account');

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
 */
router.post('/attachZoom', accountService.upgrade);

module.exports = router;