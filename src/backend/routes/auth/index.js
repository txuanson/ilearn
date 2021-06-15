const express = require('express');
const router = express.Router();
const loginController = require('../../controllers/auth/login');
const registerController = require('../../controllers/auth/register');

/**
 * @openapi
 * /auth/login:
 *   post:
 *     summary: Login to iLearn
 *     tags:
 *       - auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *             required:
 *               - username
 *               - password
 */
router.post('/login', loginController);

/**
 * @openapi
 * /auth/register:
 *   post:
 *     summary: Create a new iLearn account
 *     tags:
 *       - auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               email:
 *                 type: email
 *               name:
 *                 type: string
 *               password:
 *                 type: string
 *             required:
 *               - username
 *               - email
 *               - name
 *               - password
 */
router.post('/register', registerController);

module.exports = router;