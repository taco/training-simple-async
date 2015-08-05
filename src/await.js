var fetch = require('./util/fetch')

async function loadMeals() {
	let meals = await fetch.promise('/meals');
	let catagories = await fetch.promise('/catagories');
	let attributes = await fetch.promise('/attributes');

	console.log('meals', meals);
	console.log('catagories', catagories);
	console.log('attributes', attributes);
};

module.exports = function() {

	(async function() {
		console.log('start async');
		await loadMeals();
		console.log('Meals loaded!');
	})()

	console.log('keep rolling!');
}