
/*
 * Here we set up our "Users" routes.
 */
 
'use strict';

module.exports = function(app) {

  var Users = require('../controllers/usersController');

  /*
   * Routes.
   */

	// 
	app.route('/api/users')
		.get(Users.get_all_users)
		.post(Users.create_a_user);
		
	// 
	app.route('/api/users/:id')
		.put(Users.update_user_by_id);
		
		
};
