const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Get all products.');
});

router.get('/:id', (req, res) => {
    res.send('Get a product.');
});

router.post('/', (req, res) => {
    res.send('Create a product');
});

router.delete('/:id', (req, res) => {
    res.send('Delete product.');
});

router.put('/:id', (req, res) => {
    res.send('Update product.');
});

module.exports = router;