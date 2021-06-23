const express = require('express');
const courseTutorRoute = require('./course');
const sectionTutorRoute = require('./section');
const router = express.Router();

router.use('/course', courseTutorRoute);
router.use('/section', sectionTutorRoute);

module.exports = router;