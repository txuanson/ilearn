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
 */
 router.get('/', user.find);

 module.exports = router;