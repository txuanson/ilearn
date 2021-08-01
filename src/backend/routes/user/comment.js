const express = require('express');
const comment = require('../../controllers/comment');
const router = express.Router();

/**
 * @openapi
 * paths:
 *   /user/comment:
 *     get:
 *       summary: Get comment of section
 *       tags:
 *         - user
 *       parameters:
 *         - in: query
 *           name: section_id
 *           schema:
 *             type: string
 *           requied: true
 *         - in: query
 *           name: page
 *           schema:
 *             type: integer
 *         - in: query
 *           name: page_size
 *           schema:
 *             type: integer
 *     post:
 *       summary: Post an comment (ask)
 *       tags:
 *         - user
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 section_id:
 *                   type: string
 *                 content:
 *                   type: string
 *               required:
 *                 - section_id
 *                 - content
 *   /user/comment/reply:
 *     post:
 *       summary: Post an reply to an comment
 *       tags:
 *         - user
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 comment_id:
 *                   type: string
 *                 content:
 *                   type: string
 *               required:
 *                 - comment_id
 *                 - content
 */
router.get('/', comment.get);
router.post('/reply', comment.reply);
router.post('/', comment.post);

module.exports = router;