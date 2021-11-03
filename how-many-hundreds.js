var howManyHundreds = function (num) {
  var inHundred = num / 100;
  if (inHundred < 1) {
    return 0;
  } else {
    return Math.floor(inHundred);
  }
};