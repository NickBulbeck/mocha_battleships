var expect = require('chai').expect;

// Test suite

describe('Mocha', function() { // I think 'Mocha' here is just a foadyb name for the test suite
	// Test spec (unit test)
	it('should run our tests using npm', function() {
		// First, do a wee sanity check: a test that we KNOW should pass if mocha itself is working
		expect(true).to.be.ok; // ok is an assertion method in chai - looks for anything truthy
	});
});