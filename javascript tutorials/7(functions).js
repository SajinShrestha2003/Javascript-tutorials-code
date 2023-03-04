let a = 1;
let b = 2;
let c = 3;
console.log("average of a and b is", (a + b) / 2);
console.log("average of a and c is", (a + c) / 2);
console.log("average of b and c is", (b + c) / 2);

//->this is a function
function avg(x, y) {
  return (x + y) / 2;
}
console.log("average of 10 and 20 using function is", avg(10, 20)); //->calling a function

//->arrow function
const ave = (n1, n2) => {
  return (n1 + n2) / 2;
};
console.log("average of 100 and 20 using arrow function is", ave(100, 20)); //->calling a arrow function