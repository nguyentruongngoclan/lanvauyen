// import npm packages
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;
const routes = require('./src/backend_routes/api');

mongoose.connect(process.env.MONGODB_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});
mongoose.connection.on('connected', () => {
	console.log("mongoose is connected");
});

// Data parsing so requests are parsed and used as json from server
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// HTTP requests logger
app.use(morgan('tiny'));
app.use('/api', routes);

if (process.env.NODE_ENV === "production") {
	app.use(express.static('build'));
}

app.listen(PORT, console.log(`Server is listening at ${PORT}`));

