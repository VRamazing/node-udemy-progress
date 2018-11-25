const utils = require('./utils');
const expect = require('expect');

describe('Utils', () => {

	describe('#add', ()=>{
		it('should add two numbers', () => {
			var res = utils.add(33, 11);
			expect(res).toBe(44).toBeA('number');
		});
		it('should async add two numbers', (done) => {
			utils.asyncAdd(4, 3,  (sum) => {
				expect(sum).toBe(7).toBeA('number');
				done();
			})
		});
	})

	describe('#multiply', ()=>{
		it('should multiply two numbers', () => {
			var res = utils.mul(33, 11);
			expect(res).toBe(363).toBeA('number');
		});
	})

	describe('#square', ()=>{
		it('should square', () => {
			var res = utils.square(5);
			expect(res).toBe(25).toBeA('number');
			var res = utils.square(6);
			expect(res).toBe(36).toBeA('number');
		});
	})
	
	describe('#users', ()=>{
		it('should have first name and last name', () => {
			var res = utils.setName({age: 22, occupation: 'engineer'}, "vignesh ramesh");
			expect(res).toInclude({firstName: "vignesh", lastName: "ramesh"})
		});
	})
	
})

