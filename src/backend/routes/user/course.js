const express = require('express');
const router = express.Router();
const course = require("../../controllers/course");

/**
 * @openapi
 * paths:
 *   /user/course/{course_id}:
 *     get:
 *       summary: Get Course Info
 *       tags:
 *         - user
 *       parameters:
 *         - in: path
 *           name: course_id
 *           required: true
 *           schema:
 *             type: string
 *   /user/course/{course_id}/join:
 *     get:
 *       summary: Join the course with current learning (new) section
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
router.get('/:course_id/join', course.getCurrentSection);

module.exports = router;