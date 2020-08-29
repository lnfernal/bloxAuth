require('dotenv').config();

// Packages \\
const express = require('express');

// Express Initialization \\
const Router = express.Router();

// Route: "/" \\
Router.get('/', (req, res) => {
    res.send('Route /');
})

// Router Export \\
module.exports = Router