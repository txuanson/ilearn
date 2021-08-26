const express = require('express');
const course = require('../../controllers/course');
const upload = require('../../helpers/upload');
const router = express.Router();
const courseUploadFileMiddleware = upload.fields([{ name: 'cover', maxCount: 1 }, { name: 'doc', maxCount: 1 }]);
/**
 * @openapi
 * components:
 *   schemas:
 *     NewCourse:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *         content:
 *           type: string
 *         category:
 *           type: string
 *         description:
 *           type: string
 *         public:
 *           type: boolean
 *         cover:
 *           type: string
 *           format: binary
 *       required: 
 *         - name
 *         - content
 *         - category
 *         - public
 *         - cover
 * 
 * paths:
 *   /tutor/course/:
 *     get:
 *       summary: Get owned course (my course)
 *       tags:
 *         - tutor
 *     parameters:
 *       - in: query
 *         name: query
 *         schema:
 *           type: string
 *         description: Use to search for course with the course name
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: Page number use in pagination
 *       - in: query
 *         name: page_size
 *         schema:
 *           type: integer
 *         description: Use in pagination
 *     post:
 *       summary: Create a new course
 *       tags:
 *         - tutor
 *       requestBody:
 *         required: true
 *         content: 
 *           multipart/form-data:
 *             schema:
 *               $ref: '#/components/schemas/NewCourse'
 *   /tutor/course/{course_id}:
 *     patch:
 *       summary: Edit a course
 *       tags:
 *         - tutor
 *       parameters:
 *         - in: path
 *           name: course_id
 *           schema:
 *             type: string
 *           required: true
 *       requestBody:
 *         required: true
 *         content: 
 *           multipart/form-data:
 *             schema:
 *               $ref: '#/components/schemas/NewCourse'
 *     delete:
 *       summary: Delete a course
 *       tags:
 *         - tutor
 *       parameters:
 *         - in: path
 *           name: course_id
 *           schema:
 *             type: string
 *           required: true  
 * 
 * /tutor/course/{course_id}/subscriber:
 *   get:
 *     summary: List subscriber of course
 *     tags:
 *       - tutor
 *     parameters:
 *       - in: path
 *         name: course_id
 *         schema:
 *           type: string
 *         required: true
 * 
 * /tutor/course/{course_id}/pending:
 *   get:
 *     summary: List users pending for approve of course
 *     tags:
 *       - tutor
 *     parameters:
 *       - in: path
 *         name: course_id
 *         schema:
 *           type: string
 *         required: true
 * 
 * /tutor/course/{course_id}/banned:
 *   get:
 *     summary: List users banned from course
 *     tags:
 *       - tutor
 *     parameters:
 *       - in: path
 *         name: course_id
 *         schema:
 *           type: string
 *         required: true
 * 
 * /tutor/course/{course_id}/section:
 *   get:
 *     summary: List sections of course
 *     tags:
 *       - tutor
 *     parameters:
 *       - in: path
 *         name: course_id
 *         schema:
 *           type: string
 *         required: true
 * /tutor/course/{course_id}/approve:
 *   patch:
 *     summary: Approve an user to course
 *     tags:
 *       - tutor
 *     parameters:
 *       - in: path
 *         name: course_id
 *         schema:
 *           type: string
 *         required: true
 *     requestBody:
 *       required: true
 *       content: 
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               user_id:
 *                 type: string
 * /tutor/course/{course_id}/ban:
 *   patch:
 *     summary: Ban an user from course
 *     tags:
 *       - tutor
 *     parameters:
 *       - in: path
 *         name: course_id
 *         schema:
 *           type: string
 *         required: true
 *     requestBody:
 *       required: true
 *       content: 
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               user_id:
 *                 type: string
 *               reason:
 *                 type: string
 * /tutor/course/{course_id}/unban:
 *   patch:
 *     summary: Unban an user
 *     tags:
 *       - tutor
 *     parameters:
 *       - in: path
 *         name: course_id
 *         schema:
 *           type: string
 *         required: true
 *     requestBody:
 *       required: true
 *       content: 
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               user_id:
 *                 type: string
 */

router.get('/', course.getOwnedCourse);

router.post('/',
    courseUploadFileMiddleware,
    course.create);

router.patch('/:course_id',
    courseUploadFileMiddleware,
    course.edit);

router.delete('/:course_id', course.delete);

router.get('/:course_id/subscriber', course.listSubscriber);
router.get('/:course_id/pending', course.listPending);
router.get('/:course_id/banned', course.listBanned);
router.get('/:course_id/section', course.listSectionTutor);

router.patch('/:course_id/approve', course.approveUser);
router.patch('/:course_id/ban', course.banUser);
router.patch('/:course_id/unban', course.unbanUser);
module.exports = router;