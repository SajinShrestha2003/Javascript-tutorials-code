let number = 10;

//->'if' statement
if (number == 10) {
  console.log("number is 10");
}

//->'if...else' statement
number++; //->number = 11
if (number == 10) {
  console.log("number is 10");
} else {
  console.log("number is not 10");
}

//'if...else if...else' statement
number++; //->number = 12
if (number < 12) {
  console.log("number is less than 12");
} else if (number > 12) {
  console.log("number is greater than 12");
} else {
  console.log("number is 12");
}

//'switch..case
let num = 2;
switch (num) {
  case 1:
    console.log("number 1");
    break;
  case 2:
    console.log("number 2");
    break;
  default:
    console.log("default");
}