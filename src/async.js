var fetch = require('./util/fetch');

module.exports = function() {
	console.log('Making Async calls');

	fetch.async('/meals', function(data) {
		var meals = data;
		console.log('meals', meals);
	});
	fetch.async('/categories', function(data) {
		var categories = data;
		console.log('meals', categories);
	});
	fetch.async('/attributes', function(data) {
		var attributes = data;
		console.log('attributes', attributes);
	});
};