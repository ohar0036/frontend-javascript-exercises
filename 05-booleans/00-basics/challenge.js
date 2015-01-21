module.exports.equalStrings = function(stringOne, stringTwo) {
  return stringOne === stringTwo;
};

module.exports.notEqual = function(one, two) {
  return (one) !== (two);
};

module.exports.inBetween = function(lower, middle, upper) {
  var truth = lower > middle > upper;
  return truth;
};

module.exports.outsideRanges = function(number) {
 return (number < 10 && number <= 42 && number > 75);
};

module.exports.nameAndPrice = function(name, price) {
  return (name == "NYTimes" || "LATimes" && price <= 1);
};