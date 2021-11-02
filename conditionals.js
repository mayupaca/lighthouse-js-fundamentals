//if Statement
/*
const raining = true;
const cold = true;

if (raining) {
  console.log("Don't forget your umbrella!");
}

if (cold) {
  console.log("Make sure you pick out a scarf!");
}

console.log("Now you're ready to go outside!");
*/
//-------------------------------
/*
const cold = false;

if (cold) {
  console.log("Make sure you pick out a scarf!");
} else {
  console.log("Short sleeves are fine.");
}
*/
//--------------------------------
/*
const temperature = 35;

if (temperature < 0) {
  console.log("Make syre you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");
*/
//----------------------------------
//Logical operators
/*
const isCitizen = true;
const age = 26;

if (isCitizen && age > 18) {
  console.log("You are eligible to vote.");
}
*/
//-----------------------------------
/*
if (temperature < -40 || temperature > 40) {
  console.log("Maybe going outside isn't such a great idea...");
}

if (!raining) {
  console.log("Leave your umbrella at home!");
}
*/
//-----------------------
const whichSchool = function (age) {

  // Age is below 13.
  if (age < 13) {
    return "Elementary School";
    // Age is between 13 and 18 (both inclusive)
  } else if (age >= 13 && age < 18) {
    return "Secondary School";
    // All other cases
  } else {
    return "Lighthouse Labs";
  }
}
// Result message.
console.log(whichSchool(16));

//--------------------------
var num = 99;
while (num >= 1) {
  // Last iteration. Note occurances of bottle, bottle, bottleS
  if (num === 1) {
    console.log(num + " bottle of juice on the wall! "
      + num + " bottle of juice! Take one down, pass it around... "
      + (num - 1) + " bottles of juice on the wall!");
  }
  // Second-last iteration. Note occurances of bottleS, bottleS, bottle
  else if (num === 2) {
    console.log(num + " bottles of juice on the wall! "
      + num + " bottles of juice! Take one down, pass it around... "
      + (num - 1) + " bottle of juice on the wall!");
  }
  // All other iterations. Note occurances of bottleS, bottleS, bottleS
  else {
    console.log(num + " bottles of juice on the wall! "
      + num + " bottles of juice! Take one down, pass it around... "
      + (num - 1) + " bottles of juice on the wall!");
  }
  num = num - 1;
}

//-----------------------------------------
// My code
let countDown = 60;

while (countDown >= 0) {
  if (countDown === 0) {
    console.log("Solid rocket booster ignition and liftoff!");
  } else if (countDown === 6) {
    console.log("Main engine start ");
  } else if (countDown === 10) {
    console.log("Activate main engine hydrogen burnoff system");
  } else if (countDown === 16) {
    console.log("Activate launch pad sound suppression system");
  } else if (countDown === 31) {
    console.log("Ground launch sequencer is go for auto sequence start");
  } else if (countDown === 50) {
    console.log("Orbiter transfers from ground to internal power");
  } else {
    console.log("T-" + countDown + " seconds")
  }
  countDown = countDown - 1;
}
//Answer code
n = 60

// While loop with a stop condition
while (n >= 0) {
  if (n === 50) {
    console.log("Orbiter transfers from ground to internal power");
  }
  else if (n === 31) {
    console.log("Ground launch sequencer is go for auto sequence start");
  }
  else if (n === 16) {
    console.log("Activate launch pad sound suppression system");
  }
  else if (n === 10) {
    console.log("Activate main engine hydrogen burnoff system");
  }
  else if (n === 6) {
    console.log("Main engine start");
  }
  else if (n === 0) {
    console.log("Solid rocket booster ignition and liftoff!");
  }
  else {
    console.log("T-" + n + " seconds");
  }
  n = n - 1;
}