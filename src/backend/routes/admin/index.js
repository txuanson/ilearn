const express = require('express');
const dashboard = require('../../controllers/admin/dashboard');
const categoryRoute = require('./category');
const courseRoute = require('./course');
const userRoute = require('./user');
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
 */
router.get('/dashboard', dashboard)

module.exports = router;