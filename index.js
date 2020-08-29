// .env Initialization \\
require('dotenv').config();

// Packages \\
const express = require('express');
const chalk = require('chalk');

// Modules \\
const mainRoute = require('./src/routes/mainRoute.js'); 

// enviornment Variables \\
const PORT = process.env.PORT || 8080

// express-init \\
const app = express();

// app-use \\
app.use('/', mainRoute);

// express-listen \\
app.listen(PORT, () => {
    console.log(`${chalk.green('Listening:')} on http://localhost:${PORT}`)
})