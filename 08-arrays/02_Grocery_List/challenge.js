  module.exports.addItem = function(item, groceryList) {
    if (groceryList.indexOf(item) == -1){
      groceryList.push(item);
    }
    return groceryList;
    

};

module.exports.reverseSortedList = function(cats) {
  cats.sort();
  cats.reverse();
  return cats;

};