const express = require('express');
const categoryRoute = require('./category');
const courseRoute = require('./course');
const userRoute = require('./user');
const router = express.Router();

router.use('/category', categoryRoute);
router.use('/course', courseRoute);
router.use('/user', userRoute);

module.exports = router;