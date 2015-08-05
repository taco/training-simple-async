var cmdargs = require('yargs').argv;
var sync = require('./src/sync');
var async = require('./src/async');
var asyncTree = require('./src/asyncTree');
var promisesAll = require('./src/promisesAll');
var promisesTree = require('./src/promisesTree');
import generators from './src/generators';
import await from './src/await';


var operation = cmdargs._[0];

var operations = {
	sync: sync,

	async: async,

	asyncTree: asyncTree,

	promisesAll: promisesAll,

	promisesTree: promisesTree,

	generators: generators,

	await: await,

	help: function() {
		console.log('Possible Commands:', '\n', '-', Object.keys(this).filter(function(k) {
            return k.indexOf('_') !== 0;
        }).join('\n - '));
	}
}

if (operations[operation]) {
    operations[operation]();
} else {
    console.log('Unknown Command: ', operation, '\n');
    operations.help();
}