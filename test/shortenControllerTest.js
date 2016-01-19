'use stricts';

var path = process.cwd();
var Controller = require(path + '/app/controller/shortenController.js');
var shortenController = new Controller();
var assert = require('assert');

//assert that passing valid url would return a shorten path
assert.deepEqual({ original_url: 'http://www.example1.com',
  short_url: 'http://localhost/1' },shortenController.process('http://localhost','http://www.example1.com'));

//assert that passing new url would return a new shorten path
assert.deepEqual({ original_url: 'http://www.example2.com',
  short_url: 'http://localhost/2' },shortenController.process('http://localhost','http://www.example2.com'));

//assert that passing existing url would return the same shorten path
assert.deepEqual({ original_url: 'http://www.example2.com',
  short_url: 'http://localhost/2' },shortenController.process('http://localhost','http://www.example2.com'));

//assert that passing invalid url would return error result
assert.deepEqual({ error: 'URL invalid' },shortenController.process('http://localhost','NOT_A_VALID_URL'));