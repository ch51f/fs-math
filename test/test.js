var assert = require('assert');
var fm = require('../index.js').default;

describe('房星Math库测试', function() {
	describe('add(arg1, arg2)加法测试', function() {
		it("1.2 加 1.56 是否等于 2.76", function() {
			assert.equal(fm.add(1.2, 1.56), 2.76);
		});
		it("514 加 1234 是否等于 1748", function() {
			assert.equal(fm.add(514, 1234), 1748);
		});
		it("0.2123 加 1.5632 是否等于 1.7755", function() {
			assert.equal(fm.add(0.2123, 1.5632), 1.7755);
		});
	});
	describe('addition(...args)多参数加法测试', function() {
		it("1到10相加 是否等于 55", function() {
			assert.equal(fm.addition(1, 2, 3, 4, 5, 6, 7, 8, 9, 10), 55);
		});
		it("1.11111到9.99999相加 是否等于 ", function() {
			assert.equal(fm.addition(1.11111, 2.22222, 3.33333, 4.44444, 5.55555, 6.66666, 7.77777, 8.88888, 9.99999), 49.99995);
		});
	});

	describe('sub(arg1, arg2)减法测试', function() {
		it("sub(1) 是否等于1" , function() {
			assert.equal(fm.sub(1), 1)
		});
	});
	describe('subtract(...args)减法测试', function() {
		it("subtract(1) 是否等于1" , function() {
			assert.equal(fm.subtract(1), 1)
		});
	});

	describe('mul(arg1, arg2)减法测试', function() {
		it("mul(1) 是否等于1" , function() {
			assert.equal(fm.sub(1), 1)
		});
	});
	describe('multiply(...args)减法测试', function() {
		it("multiply(1) 是否等于1" , function() {
			assert.equal(fm.subtract(1), 1)
		});
	});

	describe('div(arg1, arg2)减法测试', function() {
		it("div(1) 是否等于1" , function() {
			assert.equal(fm.sub(1), 1)
		});
	});
	describe('divide(...args)减法测试', function() {
		it("divide(1) 是否等于1" , function() {
			assert.equal(fm.subtract(1), 1)
		});
	});
});