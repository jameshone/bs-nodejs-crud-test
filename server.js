
/*
 * Start up a node server on port 3000.
 */
 
'use strict';

	// Import the App settings.
var app = require('./app'),
	// Import the body-parser library
	bodyParser = require('body-parser'),
	// Import the "Users" model.
	Users = require('./api/models/usersModel'),
	// Import the "Users" routes.
	UserRoutes = require('./api/routes/usersRoutes'),
	// Define the servers port if not defined.
	port = process.env.PORT || 3000;

// Use body parser so we can grab info from POST requests.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Register the User routes.
UserRoutes(app);

// Send a response if the root is accessed, just to show the app is running.
app.get('/', function (req, res) {
	res.send('API root...');
});

// Send a friendly url if.
app.all('*', function(req, res){
	res.sendStatus(404);
})

// Start listening on server.
app.listen(port);

// Log that the API is ready.
console.log('RESTful API server started on port: ' + port);
