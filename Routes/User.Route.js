const express = require('express');
const router = express.Router();

// Controller
const UserController = require('../Controllers/User.Controller');

router.post('/register', UserController.createNewUser);

module.exports = router;