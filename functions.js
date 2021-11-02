let totalLaugh = ""
function laugh(num) {
  
  for (let i = 0; i < num; i++) {
    totalLaugh = totalLaugh + "ha";
  }
  totalLaugh = totalLaugh + "!";
  return totalLaugh;

}
console.log(laugh(2));

//--------------------------

function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
    line += "* ";
  }
  return line + "\n";
}

// your code goes here.  Make sure you call makeLine() in your own code.
function buildTriangle(length) {
  let triangle = "";
  //Let's start from the topmost line
  let lineNumber = 1;

  for (lineNumber = 1; lineNumber <= length; lineNumber++) {
    // We will not print one line at a time.
    // Rather, we will make a huge string that will comprise the whole triangle
    triangle = triangle + makeLine(lineNumber);
  }
  return triangle;
}
// test your code by uncommenting the following line
console.log(buildTriangle(10));

//---------------------------------
var sound = "";

// An anonymous function expression stored in the variable `laugh`
var laugh = function (num) {

  //Iterate
  for (var x = 0; x < num; x++) {
    sound = sound + "ha";
  }
  sound = sound + "!";
  return sound;
}

// It is essential that the function must return a string
console.log(laugh(3));

//------------------------------------

var cry = function myFunction() {
  var sound = "boohoo!";
  return sound;
};

// Call the function using the variable name, not the function name
console.log(cry());

// This statement is also acceptable, but it won't print anything on your console
// cry();

//----------------------------------------

// emotions() function definition
function emotions(myString, myFunc) {
  console.log("I am " + myString + ", " + myFunc(2));
}

// your code goes here
// Call the emotions() function with two arguments
// Argument 1 - "happy" string
// Argument 2 - an inline function expression

emotions("happy", function (num) {
  var sound = ""; // Local variable
  //Iterate
  for (var i = 0; i < num; i++) {
    sound = sound + "ha";
  }
  sound = sound + "!";
  return sound;
});