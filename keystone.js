// Simulate config options from your production environment by
// customising the .env file in your project's root folder.
require('dotenv').load();

// Require keystone
var keystone = require('keystone');

keystone.init({
	
	'name': 'Burner Checker DR',
	'brand': 'Burner Checker DR',
	
	'less': 'public',
	'static': 'public',
	'favicon': 'public/favicon.ico',
	
	'views': 'templates/views',
	'view engine': 'jade',
	
	'auto update': true,
	
	'session': true,
	'auth': true,
	'user model': 'User',
	'cookie secret': 'me2866V_HInMZwg?IiHd~Ir`Xg@C0**6|9GQh](#0^4ok;OtDZM^Tg0HI@[|`yJX'
	
});

keystone.import('models');

keystone.set('locals', {
	_: require('underscore'),
	env: keystone.get('env'),
	utils: keystone.utils,
	editable: keystone.content.editable
});

keystone.set('routes', require('./routes'));

keystone.set('nav', {
	'posts': ['posts', 'post-categories'],
	'users': 'users'
});

keystone.start();
