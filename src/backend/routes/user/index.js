const express = require('express');
const router = express.Router();

const accountRoute = require('./account');
const courseRoute = require('./course');
const profileRoute = require('./profile');

router.use('/account', accountRoute);
router.use('/course', courseRoute);
router.use('/profile', profileRoute);

module.exports = router;