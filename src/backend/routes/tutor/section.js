const express = require('express');
const section = require('../../controllers/section');
const router = express.Router();


/**
 * @openapi
 * 
 * components:
 *   schemas:
 *     NewSection:
 *       type: object
 *       properties:
 *         topic:
 *           type: string
 *         course_id:
 *           type: string
 *         content:
 *           type: string
 *         duration:
 *           type: integer
 *         start_time:
 *           type: date-time
 *         visible:
 *           type: boolean
 *       required: 
 *         - topic
 *         - content
 *         - course_id
 *         - start_time
 * 
 *     EditSection:
 *       type: object
 *       properties:
 *         topic:
 *           type: string
 *         content:
 *           type: string
 *         duration:
 *           type: integer
 *         start_time:
 *           type: date-time
 *       required: 
 *         - topic
 *         - content
 *         - start_time
 * /tutor/section:
 *   post:
 *     summary: Create new section of a course
 *     tags:
 *       - tutor
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/NewSection'
 * paths:
 *   /tutor/section/{secction_id}:
 *     get:
 *       summary: Get section info for tutor (use for edit)
 *       tags:
 *         - tutor
 *       parameters:
 *         - in: path
 *           name: section_id
 *           schema:
 *             type: string
 *           required: true
 *     patch:
 *       summary: Edit section
 *       tags:
 *         - tutor
 *       parameters:
 *         - in: path
 *           name: section_id
 *           schema:
 *             type: string
 *           required: true
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/EditSection'        
 *     delete:
 *       summary: Delete section
 *       tags:
 *         - tutor
 *       parameters:
 *         - in: path
 *           name: section_id
 *           schema:
 *             type: string
 *           required: true
 */
router.post('/', section.create);
router.get('/:section_id', section.getSectionWithTutor);
router.patch('/:section_id', section.edit);
router.delete('/:section_id', section.delete);

module.exports = router;
