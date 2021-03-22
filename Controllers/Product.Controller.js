const mongoose = require('mongoose');
const createError = require('http-errors');

// Models
const Product = require('../Models/Product.Model');

module.exports = {
    getAllProducts: async (req, res) => {
        try {
            const results = await Product.find({}, {__v: 0});
            res.send(results);
        } catch (error) {
            console.log(error.message);
        }
    },
    getProductById: async (req, res) => {
        const id = req.params.id;
        try {
            const result = await Product.findById(id);
            if (!result) {
                throw createError(404, 'Product does not exist.');
            }
            res.send(result);
        } catch (error) {
            console.log(error.message);
        }
    },
    createNewProduct: async (req, res) => {
        try {
            const product = new Product(req.body);
            const result = await product.save();
            res.send(result);
        } catch (error) {
            console.log(error.message);
        }
    },
    deleteProduct: async (req, res) => {
        const id = req.params.id;
        try {
            const result = await Product.findByIdAndDelete(id);
            res.send(result);
        } catch (error) {
            console.log(error.message);
        }
    },
    updateProduct: async (req, res) => {
        const id = req.params.id;
        try {
            const updates = req.body;
            const options = { new: true};
            const result = await Product.findByIdAndUpdate(id, updates, options);
            res.send(result);
        } catch (error) {
            console.log(error.message);
        }
    }
};