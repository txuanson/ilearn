const express = require('express');
const categoryRoute = require('./category');
const userRoute = require('./user');
const router = express.Router();

router.use('/category', categoryRoute);
router.use('/user', userRoute);

module.exports = router;