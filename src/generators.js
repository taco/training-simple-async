var fetch = require('./util/fetch')
var spawn = require('./util/spawn')


module.exports = function() {

  spawn(function*() {
    let meals = yield fetch.promise('/meals');
    let catagories = yield fetch.promise('/catagories');
    let attributes = yield fetch.promise('/attributes');

    console.log('meals', meals);
    console.log('catagories', catagories);
    console.log('attributes', attributes);
  });

}