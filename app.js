const express = require('express');
const app = express();
const createError = require('http-errors');
require('dotenv').config();

// Routes
const ProductRoute = require('./Routes/Product.Route');

// Initialize DB
require('./initDB')();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to NodeJS API!');
});

app.use('/products', ProductRoute);

// 404 handler and pass error handler
app.use((req, res, next) => {
    next(createError(404, 'Not found'));
});

// error handler
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send({
        error: {
            status: err.status || 500,
            message: err.message
        }
    })
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});