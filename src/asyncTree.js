var fetch = require('./util/fetch');

module.exports = function() {
	console.log('Making stacking Async Calls');

	fetch.async('/meals', function(data) {
		var meals = data;
		console.log(meals);

		if (!data.success) {
			console.log('Error loading meals');
			return
		}

		// do something with meals

		fetch.async('/categories', function(data) {
			var categories = data;
			console.log(categories);

			if (!data.success) {
				console.log('Error loading categories');
				return;
			}

			// do something with categories

			fetch.async('/attributes', function(data) {
				var attributes = data;
				console.log(attributes);

				if (!data.success) {
					console.log('Error loading attributes');
					return;
				}

				// do something with attributes;

			}, true)
		}, true)

	
	}, true)
}