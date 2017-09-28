
/*
 * Here we set up our "Users" controller.
 */
 
'use strict';

var mongoose = require('mongoose'),
	Users = mongoose.model('Users');
	
// Creates a new user.
exports.create_a_user = function(req, res) {

	// Create a new user
	var new_user = new Users(req.body);

	new_user.save(function(err, user) {

		if (err) {
			
			res.send(err);

		}

		res.json(user);

	});
};

// Updates a user by ID.
exports.update_user_by_id = function(req, res, next) {
	
    Users.findById(req.params.id, function (err, users_by_id) {
		
        if (err) {
			
			return res.status(500).send("There was a problem finding the user.");
		}
		
		console.log(users_by_id);
		
        res.send(users_by_id);
		
    });

};

// Returns all users.
exports.get_all_users = function(req, res, next) {
	

    Users.find({}, function (err, all_users) {
		
        if (err) {
			
			return res.status(500).send("There was a problem finding the users.");
		}
		
        res.json(all_users);
		
    });

};
