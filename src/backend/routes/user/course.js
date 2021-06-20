const express = require('express');
const router = express.Router();
const course = require("../../controllers/course");

/**
 * @openapi
 * paths:
 *   /user/course/{course_id}:
 *     post:
 *       summary: Get Course Info
 *       tags:
 *         - user
 *       parameters:
 *         - in: path
 *           name: course_id
 *           required: true
 *           schema:
 *             type: string
 */
router.get('/:course_id', course.info);

module.exports = router;