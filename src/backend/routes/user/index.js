const express = require('express');
const router = express.Router();

const accountRoute = require('./account');

router.use('/account', accountRoute);

module.exports = router;