const express = require('express');
const router = express.Router();
const course = require("../../controllers/course");

/**
 * @openapi
 * paths:
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
 *   /user/course/{course_id}/subscribe:
 *     patch:
 *       summary: Subscribe to course
 *       tags:
 *         - user
 *       parameters:
 *         - in: path
 *           name: course_id
 *           required: true
 *           schema:
 *             type: string
 *   /user/course/{course_id}/unsubscribe:
 *     patch:
 *       summary: Unsubscribe from course
 *       tags:
 *         - user
 *       parameters:
 *         - in: path
 *           name: course_id
 *           required: true
 *           schema:
 *             type: string
 */

router.get('/:course_id/join', course.getCurrentSection);
router.patch('/:course_id/subscribe', course.subscribeToCourse);
router.patch('/:course_id/unsubscribe', course.unsubscribeFromCourse);

module.exports = router;