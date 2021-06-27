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
 *         - in: query
 *           name: field
 *           schema:
 *             type: string
 *             enum: ['category', 'tutor']
 *           required: true
 *         - in: query
 *           name: query
 *           schema:
 *             type: ObjectId
 *         - in: query
 *           name: page
 *           schema:
 *             type: int
 *         - in: query
 *           name: page_size
 *           schema:
 *             type: int
 */
router.get('/', course.getCourseBy);


module.exports = router;