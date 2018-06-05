function RetailCalculator() {

}

RetailCalculator.prototype.orderValue = function (quantity, unit_price) {
  return quantity * unit_price;
}

RetailCalculator.prototype.applyDiscount = function (orderValue) {
  if (orderValue >= 50000) {
    return orderValue * 0.85;
  } else if (orderValue >= 20000) {
    return orderValue * 0.90;
  }
  return orderValue;
}

module.exports = RetailCalculator;