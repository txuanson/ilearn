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
 *         public:
 *           type: boolean
 *         cover:
 *           type: jpeg/jpg/png
 *       required: 
 *         - name
 *         - content
 *         - category
 *         - public
 *         - cover
 * 
 * paths:
 *   /tutor/course/:
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
 */
router.post('/',
    courseUploadFileMiddleware,
    course.create);

router.patch('/:course_id',
    courseUploadFileMiddleware,
    course.edit);

router.delete('/:course_id', course.delete);

module.exports = router;