
/*
 * Here we set up our "Users" model.
 */
 
'use strict';

	// Import the Mongoose Library.
var mongoose = require('mongoose'),
	// Define a schema.
	Schema = mongoose.Schema,
	// Create a shema instance for the "Users" model.
	UsersSchema = new Schema({
		username: String,
		first_name: String,
		last_name: String
	});

// The export function to create the "Users" model class.
module.exports = mongoose.model('Users', UsersSchema);
