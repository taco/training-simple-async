var fetch = require('./fetch');

module.exports = function() {
	console.log('Making Sync calls');

	var meals = fetch.sync('/meals');
	var categories = fetch.sync('/categories');
	var attributes = fetch.sync('/attributes');

	console.log('meals', meals);
	console.log('categories', categories);
	console.log('attributes', attributes);
};