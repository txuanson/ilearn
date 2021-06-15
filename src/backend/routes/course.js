const express = require('express');
const { getCourseBy: getCourseByCategory } = require('../controllers/course');
const router = express.Router();

/**
 * @openapi
 * paths:
 *   /course:
 *     post:
 *       summary: Link Zoom account to this iLearn account.
 *       tags:
 *         - public
 *       parameters:
 *         - in: query
 *           name: field
 *           schema:
 *             type: string
 *             enum: ["category", "tutor"]
 *           required: true
 *           description: Type of field want to filter
 *         - in: query
 *           name: query
 *           schema:
 *             type: string
 *           required: true
 *           description: String of Mongodb's ObjectId of the {field} to filter
 *         - in: query
 *           name: page
 *           schema:
 *             type: int
 *         - in: query
 *           name: page_size
 *           schema:
 *             type: int
 *             default: 20
 */
router.get('/', getCourseByCategory);

module.exports = router;