import {promise as fetch} from "./util/fetch"
import spawn from "./util/spawn"


async function loadMeals() {
	let meals = await fetch('/meals');
	let catagories = await fetch('/catagories');
	let attributes = await fetch('/attributes');

	console.log('meals', meals);
	console.log('catagories', catagories);
	console.log('attributes', attributes);
};

export default function() {

	(async function() {
		console.log('start async');
		await loadMeals();
		console.log('Meals loaded!');
	})()

	console.log('keep rolling!');
}