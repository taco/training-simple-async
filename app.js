var cmdargs = require('yargs').argv;
var Promise = require('bluebird');
var clc = require('cli-color');
var sync = require('./lib/sync');
var async = require('./lib/async');
var asyncTree = require('./lib/asyncTree');
var promisesAll = require('./lib/promisesAll');
var promisesTree = require('./lib/promisesTree');


var operation = cmdargs._[0];

var operations = {
	sync: sync,

	async: async,

	asyncTree: asyncTree,

	promisesAll: promisesAll,

	promisesTree: promisesTree,

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