const express = require('express');
const router = express.Router();

const accountRoute = require('./account');
const courseRoute = require('./course');
const profileRoute = require('./profile');
const sectionRoute = require('./section');
const commentRoute = require('./comment');

router.use('/account', accountRoute);
router.use('/course', courseRoute);
router.use('/profile', profileRoute);
router.use('/section', sectionRoute);
router.use('/comment', commentRoute);

module.exports = router;