const express = require('express');
const course = require('../controllers/course');
const router = express.Router();

/**
 * @openapi
 * paths:
 *   /course/search:
 *     get:
 *       summary: Search course by name
 *       tags:
 *         - public
 *       parameters:
 *         - in: query
 *           name: query
 *           schema:
 *             type: string
 *         - in: query
 *           name: page
 *           schema:
 *             type: int
 *         - in: query
 *           name: page_size
 *           schema:
 *             type: int
 *   /course:
 *     get:
 *       summary: List courses by category/tutor.
 *       tags:
 *         - public
 *       parameters:
 *         - in: query
 *           name: field
 *           schema:
 *             type: string
 *             enum: ['category', 'tutor']
 *           required: true
 *         - in: query
 *           name: query
 *           schema:
 *             type: string
 *         - in: query
 *           name: page
 *           schema:
 *             type: int
 *         - in: query
 *           name: page_size
 *           schema:
 *             type: int
 *   /course/{course_id}:
 *     get:
 *       summary: Get Course Info
 *       tags:
 *         - public
 *       parameters:
 *         - in: path
 *           name: course_id
 *           required: true
 *           schema:
 *             type: string
 */
router.get('/search', course.getCourseByName);
router.get('/', course.getCourseBy);
router.get('/:course_id', course.info);


module.exports = router;