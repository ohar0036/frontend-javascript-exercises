module.exports.favoriteNumber = function(guess, fav) {
  if (guess < fav) {
    return "Too high";
  }
  else if (guess > fav) {
    return "Too low";
  }
  else {
    return "You got it!";
  }

};

module.exports.checkLock = function(a, b, c, d) {
  if ((a == 3 || a == 5 || a == 7) && b == 2 )  {
    return 'correct';
  }
  else {
    return 'incorrect';
  }
};

module.exports.canIGet = function(item, money) {
  if (item == 'MacBook Air' && money >= 999) {
    return true;
  }
  else if (item == 'MacBook Pro' && money >= 1299) {
    return true;
  }
  else if (item == 'Mac Pro' && money >= 2499) {
    return true;
  }
  else if (item == 'Apple Sticker' && money >= 1) {
    return true;
  }
  else {
    return false;
  }
};