const express = require('express');
const router = express.Router();
const user = require('../../controllers/admin/account');

/**
 * @openapi
 * paths:
 *   /admin/user:
 *     get:
 *       summary: Find users by username, or list all users.
 *       tags:
 *         - admin
 *     parameters:
 *       - in: query
 *         name: query
 *         schema:
 *           type: string
 *         description: A part of users's username. Leave blank to list all users.
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: Page you want to find 
 *       - in: query
 *         name: page_size
 *         schema:
 *           type: integer
 *         description: Page Size 
 *   /admin/user/ban:
 *     post:
 *       summary: Ban an user except Admin!
 *       tags:
 *         - admin
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 user_id:
 *                   type: string
 *                 amount:
 *                   type: integer
 */
 router.get('/', user.find);
 router.post('/ban', user.ban);

 module.exports = router;