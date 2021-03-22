const express = require('express');
const app = express();
require('dotenv').config();

// Initialize DB
require('./initDB')();

app.get('/', (req, res) => {
    res.send('Welcome to NodeJS API!');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});