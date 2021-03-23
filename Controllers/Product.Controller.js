const mongoose = require('mongoose');
const createError = require('http-errors');

// Models
const Product = require('../Models/Product.Model');
const { NotExtended } = require('http-errors');

module.exports = {
    getAllProducts: async (req, res, next) => {
        try {
            const results = await Product.find({}, {__v: 0});
            res.send(results);
        } catch (error) {
            console.log(error.message);
            next(error);
        }
    },
    getProductById: async (req, res, next) => {
        const id = req.params.id;
        try {
            const result = await Product.findById(id);
            if (!result) {
                throw createError(404, 'Product does not exist.');
            }
            res.send(result);
        } catch (error) {
            console.log(error.message);
            // for mongodb cast to object failed
            if(error instanceof mongoose.CastError){
                next(createError(400, 'Invalid product id.'));
                return;
            }
            next(error);
        }
    },
    createNewProduct: async (req, res, next) => {
        try {
            const product = new Product(req.body);
            const result = await product.save();
            res.send(result);
        } catch (error) {
            console.log(error.message);
            next(error);
        }
    },
    deleteProduct: async (req, res, next) => {
        const id = req.params.id;
        try {
            const result = await Product.findByIdAndDelete(id);
            if (!result) {
                throw createError(404, 'Product already does not exits.');
            }
            res.send(result);
        } catch (error) {
            console.log(error.message);
            if (error instanceof mongoose.CastError) {
                next(createError(400, 'Invalid product id.'));
                return;
            }
            next(error);
        }
    },
    updateProduct: async (req, res, next) => {
        const id = req.params.id;
        try {
            const updates = req.body;
            const options = { new: true};
            const result = await Product.findByIdAndUpdate(id, updates, options);
            if (!result) {
                throw createError(404, 'Product does not exits.');
            }
            res.send(result);
        } catch (error) {
            console.log(error.message);
            if (error instanceof mongoose.CastError) {
                next(createError(400, 'Invalid product id.'));
                return;
            }
            next(error);
        }
    }
};