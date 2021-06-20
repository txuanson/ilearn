const express = require('express');
const router = express.Router();

const accountRoute = require('./account');
const courseRoute = require('./course');
router.use('/account', accountRoute);
router.use('/course', courseRoute);

module.exports = router;