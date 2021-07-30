const express = require('express');
const courseTutorRoute = require('./course');
const sectionTutorRoute = require('./section');
const storageRoute = require('./storage');
const router = express.Router();

router.use('/course', courseTutorRoute);
router.use('/section', sectionTutorRoute);
router.use('/storage', storageRoute);

module.exports = router;