import {promise as fetch} from "./fetch"
import spawn from "./spawn"


export default function() {


  spawn(function*() {
    let meals = yield fetch('/meals');
    let catagories = yield fetch('/catagories');
    let attributes = yield fetch('/attributes');

    console.log('meals', meals);
    console.log('catagories', catagories);
    console.log('attributes', attributes);
  });

}