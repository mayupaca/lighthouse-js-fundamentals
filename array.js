/*
 * Programming Quiz: Quidditch Cup (6-5)
 */
/*
 * QUIZ REQUIREMENTS
 * - Your code should have a function `hasEnoughPlayers()`
 * - Your function `hasEnoughPlayers()` should accept one parameter
 * - Your function `hasEnoughPlayers()` should return the expected output - a Boolean value - true or false
 * - Return true if the array size is atleast 7, otherwise false. 
 */

var team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];
function hasEnoughPlayers(numPlayer) {
  if (numPlayer.length >= 7) {
    return true;
  } else {
    return false;
  }
}
console.log(hasEnoughPlayers(team));
//-----------------------------------
test.forEach(function (item, index) {
  if (item % 3 === 0) {
    // The commented statements below would not be able to change the value of item
    // because the `item` is a COPY of actual element, while actual is test[index]
    // item = item + 100;
    // console.log("The updated element is "+item+" and actual is "+test[index]);
    test[index] = test[index] + 100;
  }
  //else 
  //    console.log("Element "+item+" is not divisible by 3");
});
console.log(test);
//------------------------------------
test.forEach(function (test) {
  if (test % 3 === 0) {
    test += 100;
    console.log(test);

  } else {
    console.log(test);

  }
});
//------------------------------------
var bills = [50.23, 19.12, 34.01,
  100.11, 12.15, 9.90, 29.11, 12.99,
  10.00, 99.22, 102.20, 100.10, 6.77, 2.22
];
var totals = bills.map(function (element) {
  element *= 1.15;
  element = element.toFixed(2);
  element = Number(element);

  return element;
});
console.log(totals);
//--------------------------------------
var numbers = [
  [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
  [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
  [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
  [12, 31, 55, 445, 79, 44, 674, 224, 4, 21],
  [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
  [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424],
  [74, 532, 6, 7, 35, 17, 89, 43, 43, 66],
  [53, 6, 89, 10, 23, 52, 111, 44, 109, 80],
  [67, 6, 53, 537, 2, 168, 16, 2, 1, 8],
  [76, 7, 9, 6, 3, 73, 77, 100, 56, 100]
];

for (var r = 0; r < numbers.length; r++) {
  for (var c = 0; c < numbers[r].length; c++) {
    if (numbers[r][c] % 2 === 0) {
      numbers[r][c] = "even";
    } else {
      numbers[r][c] = "odd";
    }
  }
}
console.log(numbers);