const utils = require('./utils');
const expect = require('expect');

it('should add two numbers', () => {
	var res = utils.add(33, 11);
	// throw new Error('Value not correct');
	if(res !== 44){
		throw new Error(`Expected 44 but got ${res}`)
	}
});

it('should multiply two numbers', () => {
	var res = utils.mul(33, 11);
	// throw new Error('Value not correct');
	if(res !== 363){
		throw new Error(`Expected 363 but got ${res}`)
	}
});