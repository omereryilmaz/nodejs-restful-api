const express = require('express');
const router = express.Router();

// Controller
const ProductController = require('../Controllers/Product.Controller');

router.get('/', ProductController.getAllProducts);

router.get('/:id', ProductController.getProductById);

router.post('/', ProductController.createNewProduct);

router.delete('/:id', ProductController.deleteProduct);

router.put('/:id', ProductController.updateProduct);

router.get('/category/:id', ProductController.getProductByCategoryId);

module.exports = router;