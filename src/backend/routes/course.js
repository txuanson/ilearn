const express = require('express');
const course = require('../controllers/course');
const router = express.Router();

/**
 * @openapi
 * paths:
 *   /course:
 *     get:
 *       summary: List courses by category/tutor.
 *       tags:
 *         - public
 *       parameters:
 *         - in: path
 *           name: course_id
 *           schema:
 *             type: string
 *           required: true
 *           description: Id of the course
 */
router.get('/', course.getCourseBy);


module.exports = router;