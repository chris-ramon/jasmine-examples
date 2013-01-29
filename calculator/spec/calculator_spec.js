describe("Calculator Test Suite", function() {
	beforeEach(function() {
		Calculator.current = 0;
	});
	it("should add numbers", function() {
		expect(Calculator.add(7)).toEqual(7);
		expect(Calculator.add(4)).toEqual(11);
		expect(Calculator.add(2, 4)).toEqual(17);
	});
	it("should subsctract numbers", function() {
		expect(Calculator.substract(1)).toEqual(-1);
	});
	it("should multiply numbers", function() {
		expect(Calculator.multiply(2,3,4)).toEqual(24);
		expect(Calculator.multiply(3,5)).toEqual(360);
		expect(Calculator.multiply(7,8,9)).toEqual(181440);
	});
	it("should divide numbers", function() {
		expect(Calculator.divide(4,2)).toEqual(2);
	});
});