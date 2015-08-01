$.on('#sync', 'click', function onClick() {
	var meals = fetchSync('/meals');
	var categories = fetchSync('/categories');
	var attributes = fetchSync('/attributes');
});

$.on('#async', 'click', function onClick() {
	fetchAsync('/meals', function(data) {
		var meals = data;
		console.log(meals);
	});
	fetchAsync('/categories', function(data) {
		var categories = data;
		console.log(categories);
	});
	fetchAsync('/attributes', function(data) {
		var attributes = data;
		console.log(attributes);
	});
});








function fetchSync(url) {
	console.log('S', url);
	var i = 0;
	while (++i < 5) {}
	console.log('S ->', url);
	return {
		success: true,
		items: []
	};
}

function fetchAsync(url, cb) {
	console.log('\tA', url);
	setTimeout(function() {
		console.log('\tA ->', url);
		cb && cb({
			success: true,
			items: []
		})
	}, 15e3);
}