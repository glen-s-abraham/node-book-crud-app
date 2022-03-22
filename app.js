const express = require('express');
const BookRouter = require('./routes/BookRoute');
const swaggerJsDocs = require('swagger-jsdoc')
const swaggerUI = require('swagger-ui-express')

//Swagger specs
const swaggeSpecs = swaggerJsDocs({
    
	definition: {
		openapi: "3.0.0",
		info: {
			title: "Book API",
			version: "1.0.0",
			description: "A simple Express CRUD API",
		},
		servers: [
			{
				url: "http://localhost:3000",
			},
		],
	},
    apis: ["./routes/*.js"],
});


const app = express();

app.use(express.json());



app.use('/api/books',BookRouter);
app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(swaggeSpecs))


module.exports = app;



