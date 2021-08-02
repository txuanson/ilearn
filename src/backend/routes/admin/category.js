const express = require('express');
const category = require('../../controllers/admin/category');
const router = express.Router();

/**
 * @openapi
 * paths:
 *   /admin/category:
 *     post:
 *       summary: Add a new category
 *       tags:
 *         - admin
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *               required:
 *                 - name
 *   /admin/category/{category_id}:
 *     patch:
 *       summary: Edit a category
 *       tags:
 *         - admin
 *       parameters:
 *         - in: path
 *           name: category_id
 *           required: true
 *           schema:
 *             type: string
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *               required:
 *                 - name     
 *     delete:
 *       summary: Delete a category
 *       tags:
 *         - admin
 *       parameters:
 *         - in: path
 *           name: category_id
 *           required: true
 *           schema:
 *             type: string
 */
router.post('/', category.create);
router.patch('/:category_id', category.edit)
router.delete('/:category_id', category.remove)

module.exports = router;