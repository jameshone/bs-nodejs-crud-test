
/*
 * Here we specify a DB connection and connect to it.
 */

	// Import the mongoose module.
var mongoose = require('mongoose'),
	// Set our default mongoose connection.
	mongoDB = 'mongodb://localhost/bs_nodejs_crud_test',
	// Get our default connection & connect to the the database.
	db = mongoose.connect('mongodb://localhost/bs_nodejs_crud_test', {useMongoClient: true});

// Set the mongoose debug flag to true to get more verbose info.
mongoose.set('debug', true);

// Bind connection to an error event, to get notifications of connection errors.
db.on('error', console.error.bind(console, 'A MongoDB connection error has occurred : '));
