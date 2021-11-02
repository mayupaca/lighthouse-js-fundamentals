//Scope
/*
 * Global scope. 
 * This variable declared outside of any function is called Global variable. 
 * Hence, you can use this anywhere in the code
 */
var opinion = "This nanodegree is amazing";

// Function scope
function showMessage() {
  // Local variable, visible within the function `showMessage`
  var message = "I am an Udacian!";

  // Block scope
  {
    let greet = "How are you doing?";
    /*
     * We have used the keyword `let` to declare a variable `greet` because variables declared with the `var` keyword can not have Block Scope. 
     */
  } // block scope ends

  console.log(message); // OK
  console.log(greet); // ERROR. 
  // Variable greet can NOT be used outside the block

  console.log(opinion); // OK    to use the gobal variable anywhere in the code

} // function scope ends

//--------------------------
// var num = 99;
// while (num >= 1) {
//   // Last iteration. Note occurances of bottle, bottle, bottleS
//   if (num === 1) {
//     console.log(num + " bottle of juice on the wall! "
//       + num + " bottle of juice! Take one down, pass it around... "
//       + (num - 1) + " bottles of juice on the wall!");
//   }
//   // Second-last iteration. Note occurances of bottleS, bottleS, bottle
//   else if (num === 2) {
//     console.log(num + " bottles of juice on the wall! "
//       + num + " bottles of juice! Take one down, pass it around... "
//       + (num - 1) + " bottle of juice on the wall!");
//   }
//   // All other iterations. Note occurances of bottleS, bottleS, bottleS
//   else {
//     console.log(num + " bottles of juice on the wall! "
//       + num + " bottles of juice! Take one down, pass it around... "
//       + (num - 1) + " bottles of juice on the wall!");
//   }
//   num = num - 1;
// }

// //-----------------------------------------
// // My code
// let countDown = 60;

// while (countDown >= 0) {
//   if (countDown === 0) {
//     console.log("Solid rocket booster ignition and liftoff!");
//   } else if (countDown === 6) {
//     console.log("Main engine start ");
//   } else if (countDown === 10) {
//     console.log("Activate main engine hydrogen burnoff system");
//   } else if (countDown === 16) {
//     console.log("Activate launch pad sound suppression system");
//   } else if (countDown === 31) {
//     console.log("Ground launch sequencer is go for auto sequence start");
//   } else if (countDown === 50) {
//     console.log("Orbiter transfers from ground to internal power");
//   } else {
//     console.log("T-" + countDown + " seconds")
//   }
//   countDown = countDown - 1;
// }
// //Answer code
// n = 60

// // While loop with a stop condition
// while (n >= 0) {
//   if (n === 50) {
//     console.log("Orbiter transfers from ground to internal power");
//   }
//   else if (n === 31) {
//     console.log("Ground launch sequencer is go for auto sequence start");
//   }
//   else if (n === 16) {
//     console.log("Activate launch pad sound suppression system");
//   }
//   else if (n === 10) {
//     console.log("Activate main engine hydrogen burnoff system");
//   }
//   else if (n === 6) {
//     console.log("Main engine start");
//   }
//   else if (n === 0) {
//     console.log("Solid rocket booster ignition and liftoff!");
//   }
//   else {
//     console.log("T-" + n + " seconds");
//   }
//   n = n - 1;
// }

//----------------------------
for (let i = 0; i <= 25; i++) {
  for (let j = 0; j <= 99; i++) {
    console.log(i + "-" + j);
  }
}
//-----------------------------
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 2; i++) {
    console.log(i + "-" + j);
  }
}