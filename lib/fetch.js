
module.exports = {
	sync: function(url, errors) {
		console.log('S', url);
		var error = errors && Math.random() > 0.5;
		var i = 0;
		var max = 2e9 + Math.random() * 7e9;
		while (++i < max) {}
		console.log('S ->', url);
		return {
			success: !error,
			url: url,
			items: [{}]
		};
	},

	async: function(url, cb, errors) {
		console.log('A', url);
		var error = errors && Math.random() > 0.5;
		setTimeout(function() {
			console.log('A ->', url);
			cb && cb({
				success: !error,
				url: url,
				items: [{}]
			})
		}, 2e3 + Math.random() * 6e3);
	},

	promise: function(url, errors) {
		return new Promise(function(resolve, reject) {
			module.exports.async(url, function(data) {
				if (data.success) {
					resolve(data);
				} else {
					reject(data);
				}
			}, errors)
		})
	}
};


