const express = require('express');
const BookRouter = require('./routes/BookRoute');
const app = express();

app.use(express.json());

app.use('/api/books',BookRouter);



module.exports = app;



