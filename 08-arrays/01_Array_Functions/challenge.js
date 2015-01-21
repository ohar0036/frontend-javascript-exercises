module.exports.reversePlusOne = function(cats){
  cats.reverse();
  cats.unshift(1);
  return cats;
};

module.exports.plusesEverywhere = function(cats) {
  return cats.join('+', ' ');
};

module.exports.arrayQuantityPlusOne = function(cats) {
  return cats.length + 1;
};