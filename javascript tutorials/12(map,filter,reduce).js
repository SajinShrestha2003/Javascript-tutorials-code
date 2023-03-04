let arr = [10, 20, 30, 40, 50];

//->array map() method
//->map creates a new array for each elements
let a = arr.map((value, index, array) => {
  console.log(value, index, array);
  return value + 1;
});
console.log("new array:", a);

//->array filter() method
let arr2 = [45, 23, 21, 0, 3, 5];
let ar = arr2.filter((value) => {
  return value < 10;
});
console.log(ar)

//->array reduce() method
let arr3 = [1, 2, 3, 5, 2, 1];
let newArr = arr3.reduce((a, b) => {
  return a + b;     //->gets first value and adds it with second value, then adds the new obtained value with third value and so on
});
console.log(newArr);