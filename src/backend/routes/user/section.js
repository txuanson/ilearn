const express = require('express');
const section = require('../../controllers/section');
const router = express.Router();

/**
 * @openapi
 * paths:
 *   /user/section/{course_id}/{section_id}:
 *     get:
 *       summary: Get Section Info
 *       tags:
 *         - user
 *       parameters:
 *         - in: path
 *           name: course_id
 *           required: true
 *           schema:
 *             type: string
 *         - in: path
 *           name: section_id
 *           required: true
 *           schema:
 *             type: string
 */
router.get('/:course_id/:section_id', section.get)

module.exports = router;