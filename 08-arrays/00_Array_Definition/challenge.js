module.exports.newArray = function(a, b, c, d) {
  var catArray = [a, b, c, d];
  return catArray;
};

module.exports.firstAndLast = function(passedArray) {
  var firstElement = passedArray[0]; // a
  var lastElement = passedArray[passedArray.length - 1]; // d
  return [firstElement, lastElement];

};