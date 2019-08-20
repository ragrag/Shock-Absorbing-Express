const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const helmet = require('helmet');
const apiRouter = require('./routes/api');

const app = express();

require('dotenv').config();

app.use(logger('dev'));

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Setting API Route
app.use('/api', apiRouter);

module.exports = app;
