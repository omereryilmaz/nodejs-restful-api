const mongoose = require('mongoose');
const createError = require('http-errors');

// Models
const Category = require('../Models/Category.Model');

module.exports = {
    getAllCategories: async (req, res, next) => {
        try {
            const results = await Category.find({}, {__v: 0});
            res.send(results);
        } catch (error) {
            console.log(error.message);
            next(error);
        }
    },
    createNewCategory: async (req, res, next) => {
        try {
            const category = new Category(req.body);
            const result = await category.save();
            res.send(result);
        } catch (error) {
            console.log(error.message);
            next(error);
        }
    },
    deleteCategory: async (req, res, next) => {
        const id = req.params.id;
        try {
            const result = await Category.findByIdAndDelete(id);
            if (!result) {
                throw createError(404, 'Category already does not exits.');
            }
            res.send(result);
        } catch (error) {
            console.log(error.message);
            if (error instanceof mongoose.CastError) {
                next(createError(400, 'Invalid category id.'));
                return;
            }
            next(error);
        }
    },
    updateCategory: async (req, res, next) => {
        const id = req.params.id;
        try {
            const updates = req.body;
            const options = { new: true};
            const result = await Category.findByIdAndUpdate(id, updates, options);
            if (!result) {
                throw createError(404, 'Category does not exits.');
            }
            res.send(result);
        } catch (error) {
            console.log(error.message);
            if (error instanceof mongoose.CastError) {
                next(createError(400, 'Invalid category id.'));
                return;
            }
            next(error);
        }
    },
};