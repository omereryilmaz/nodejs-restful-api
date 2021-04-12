const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    createdDate: {
        type: Date, 
        default: Date.now
    }
});

const User = mongoose.model('user', UserSchema);

module.exports = User;
