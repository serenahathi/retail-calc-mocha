var expect = require("chai").expect;
var retailCalc = require("../src/retailCalc");

describe("Retail Calculator", function () {

  describe("Base order value", function () {
    it("takes two arguments and calculates the base order value", function () {
      var calculator = new retailCalc();
      expect(calculator.orderValue(10, 1)).to.equal(10);
      expect(calculator.orderValue(50, 2)).to.equal(100);
    });
  });

  describe("Applying a discount", function () {
    it("Applies a 15% discount if order value is >= to 50k", function () {
      var calculator = new retailCalc();
      expect(calculator.applyDiscount(55000)).to.equal(46750);
      expect(calculator.applyDiscount(60000)).to.not.equal(60000);
    });

    it("Applies a 10% discount if the order value >= 20k", function () {
      var calculator = new retailCalc();
      expect(calculator.applyDiscount(25000)).to.equal(22500);
    })
  });


});