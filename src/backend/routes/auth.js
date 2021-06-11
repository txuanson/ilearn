const express = require('express');
const loginController = require('../controllers/auth/login');
const registerController = require('../controllers/auth/register');
const router = express.Router();

router.post('/login', loginController);
router.post('/register', registerController);

module.exports = router;