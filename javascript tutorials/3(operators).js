// Operators in javascript //
let a = 10;
let b = 5;
//->Arithmetic operator
console.log("a+b =", a + b);
console.log("a-b =", a - b);
console.log("a*b =", a * b);
console.log("a/b =", a / b);

//->Increment/decrement operator
a++;
console.log("a++ =", a);
b--;
console.log("b-- =", b);

//->Assignment operators
let assignment = 0;
assignment += 5;
console.log(assignment);

//->Comparison operators
let comp1 = 6; //->this is number
let comp2 = "6"; //->this is string
console.log("comp1 == comp2 is", comp1 == comp2); //->compares the value only
console.log("comp1 != comp2 is", comp1 != comp2); //->compares the value only
console.log("comp1 === comp2 is", comp1 === comp2); //->compares both the value with its data types
console.log("comp1 !== comp2 is", comp1 !== comp2); //->compares both the value with its data types

//->Logical operators
let x = 5;
let y = 6;
console.log(x < y && x == 5);   //->true an true is true
console.log(x > y || x == 5);   //->false or true is also true