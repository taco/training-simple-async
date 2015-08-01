var fetch = require('./fetch');
var Promise = require('bluebird');

module.exports = function() {
	var calls = ['/meals', '/categories', '/attributes'].map(function(url) {
		return fetch.promise(url, true);
	})

	Promise.all(calls)
		.then(function(results) {
			var meals = results[0];
			var categories = results[1];
			var attributes = results[2];

			console.log('meals', meals);
			console.log('categories', categories);
			console.log('attributes', attributes);
		})
		.catch(function(e) {
			console.log('broken', e);
		})
}