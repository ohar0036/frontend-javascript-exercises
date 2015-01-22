module.exports.formLetter = function(firstName, senderName, message) {
  return "Hello " + (firstName) + ",\n\n" + (message) + "\n\nSincerely," + "\n" + (senderName);

};

module.exports.sliceItAndCombineIt = function(bigString, startA, endA, startB, endB) {
  var subStringA = oldstring.slice(startA, endA);
  var subStringB = oldstring.slice(startB, endB);
  var finalString = subStringA + subStringB;
  return finalString;
};

module.exports.findFirstMatch = function(text, searchString) {
  return text.indexOf(searchString);

};

module.exports.findLastMatch = function(text, searchString) {
  return text.lastIndexOf(searchString);

};

module.exports.substringBetweenMatches = function(text, searchString) {
  var firstIndex = text.indexOf(searchString);
  var lastIndex = text.lastIndexOf(searchString);
  return text.subString(firstIndex, lastIndexOf);
  console.log (firstIndex);
  console.log (lastIndex);
  console.log (text.substring)(firstIndex, lastIndex);

};

// console.log(firstIndex)
//console.log(lastIndex)
//console.log(text.substring(firstIndex, lastIndex))
//text.length
