const express = require('express');
const dashboard = require('../../controllers/admin/dashboard');
const resource = require('../../controllers/admin/resource');
const categoryRoute = require('./category');
const courseRoute = require('./course');
const userRoute = require('./user');
const upload = require('../../helpers/upload');
const resourceUpload = upload.single('cover');
const router = express.Router();

router.use('/category', categoryRoute);
router.use('/course', courseRoute);
router.use('/user', userRoute);
/**
 * @openapi
 * /admin/dashboard:
 *   get:
 *     tags:
 *       - admin
 *     summary: Get admin dashboard
 * /admin/resource:
 *   put:
 *     tags:
 *       - admin
 *     summary: Upload web cover
 *   
 */
router.get('/dashboard', dashboard)
router.put('/resource', resourceUpload, resource.uploadCover)

module.exports = router;