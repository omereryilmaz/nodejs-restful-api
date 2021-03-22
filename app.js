const express = require('express');
const app = express();
require('dotenv').config();

// Routes
const ProductRoute = require('./Routes/Product.Route');

// Initialize DB
require('./initDB')();

app.get('/', (req, res) => {
    res.send('Welcome to NodeJS API!');
});

app.use('/products', ProductRoute);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});