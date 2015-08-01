var fetch = require('./fetch');
var Promise = require('bluebird');

module.exports = function() {

	fetch.promise('/meals', true)

		.then(function(meals) {
			console.log('meals', meals);

			return fetch.promise('/categories', true);
		})

		.catch(function(e) {
			//console.log('shit broke yo', e);
			throw e
		})

		.then(function(categories) {
			console.log('categories', categories);

			return fetch.promise('/attributes', true);
		})

		.catch(function(e) {
			throw e;
		})

		.then(function(attributes) {
			console.log('attributes', attributes);

			console.log('\nSuccess!');
		})

		.catch(function(e) {
			console.log('shit broke yo', e);
		});
}