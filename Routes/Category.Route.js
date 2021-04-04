const express = require('express');
const router = express.Router();

// Controller
const CategoryController = require('../Controllers/Category.Controller');

router.get('/', CategoryController.getAllCategories);

router.post('/', CategoryController.createNewCategory);

module.exports = router;