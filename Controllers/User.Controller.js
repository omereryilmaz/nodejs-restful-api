const mongoose = require('mongoose');
const createError = require('http-errors');

const ObjectId = require('mongodb').ObjectID;

// Models
const User = require('../Models/User.Model');

module.exports = {    
    createNewUser: async (req, res, next) => {
        try {
            const user = new User(req.body);
            const result = await user.save();
            res.send(result);
        } catch (error) {
            console.log(error.message);
            next(error);
        }
    }
};