const mongoose = require('mongoose');
const createError = require('http-errors');
const cryptAsync = require('../Modules/Crypt.Module');

const ObjectId = require('mongodb').ObjectID;

// Models
const User = require('../Models/User.Model');

module.exports = {    
    createNewUser: async (req, res, next) => {
        try {
            const result = await User.find({email: req.body.email});
            
            // If email already exist, don't save
            if (result.length > 0) {
                res.json({message: req.body.email + ' email already exist!'})
            } else {
                const user = new User(req.body);
                user.password = await cryptAsync.hashStrSync(user.password);
                const result = await user.save();
                res.json({
                    message: 'User has been saved successfully!'
                });
            }                   
        } catch (error) {
            console.log(error.message);
            next(error);
        }
    }
};