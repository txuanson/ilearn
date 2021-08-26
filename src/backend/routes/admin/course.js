const express = require('express');
const course = require('../../controllers/admin/course');
const router = express.Router();

/**
 * @openapi
 * paths:
 *   /admin/course:
 *     get:
 *       summary: Find course by course name.
 *       tags:
 *         - admin
 *     parameters:
 *       - in: query
 *         name: query
 *         schema:
 *           type: string
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

router.get('/', course.get);

module.exports = router;