const mongoose = require('mongoose');

module.exports  = () => {
    mongoose.connect(process.env.MONGODB_URL, {
        dbName: process.env.DB_NAME,
        useNewUrlParser: true, 
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('MongoDB Connected!');
    })
    .catch(err => console.log(err.message));
};