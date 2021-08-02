const express = require('express');
const category = require('../controllers/category');
const router = express.Router();

/**
 * @openapi
 * /category:
 *   get:
 *     summary: Get all cateogry
 */ 
router.get('/', category.get);

module.exports = router;
