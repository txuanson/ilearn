const express = require('express');
const router = express.Router();
const account = require("../controllers/account");
const authMiddleware = require('../middlewares/auth.middleware');

/**
 * @openapi
 * 
 * /profile/{user_id}:
 *   get:
 *     summary: Get user profile information
 *     tags:
 *       - public
 *     parameters:
 *       - in: path
 *         name: user_id
 *         schema:
 *           type: string
 *         required: true
 */

router.get('/:user_id', authMiddleware, account.getProfile);

module.exports = router;