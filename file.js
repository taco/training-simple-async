'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _libGenerators = require('./lib/generators');

var _libGenerators2 = _interopRequireDefault(_libGenerators);

var _libAwait = require('./lib/await');

var _libAwait2 = _interopRequireDefault(_libAwait);

var cmdargs = require('yargs').argv;
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

				generators: _libGenerators2['default'],

				await: _libAwait2['default'],

				help: function help() {
								console.log('Possible Commands:', '\n', '-', Object.keys(this).filter(function (k) {
												return k.indexOf('_') !== 0;
								}).join('\n - '));
				}
};

if (operations[operation]) {
				operations[operation]();
} else {
				console.log('Unknown Command: ', operation, '\n');
				operations.help();
}
