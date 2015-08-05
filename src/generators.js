import {promise as fetch} from "./util/fetch"
import spawn from "./util/spawn"


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