const express = require('express');
const router = express.Router();
const accountService = require('../../controllers/account');

/**
 * @openapi
 * paths:
 *   /admin/attachZoom:
 *     post:
 *       summary: Link Zoom account to this iLearn account.
 *       tags:
 *         - user
 *       requestBody:
 *         required: true
 *         content:
 *           application/x-www-form-urlencoded:
 *             schema:
 *               type: object
 *               properties:
 *                 access_code:
 *                   type: string
 *               required:
 *                 - access_code     
 */
router.post('/attachZoom', accountService.upgrade);

module.exports = router;