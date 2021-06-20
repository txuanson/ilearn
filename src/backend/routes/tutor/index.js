const express = require('express');
const courseTutorRoute = require('./course');
const router = express.Router();

router.use('/course', courseTutorRoute);

module.exports = router;