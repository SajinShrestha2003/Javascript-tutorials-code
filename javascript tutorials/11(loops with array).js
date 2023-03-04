let num = [3, 54, 1, 2, 4];

for (let i = 0; i < num.length; i++) {
  console.log(num[i]);
}

//->forEach loop
// syntax: array_name.forEach((value, index, array)=> {
//                                 //function logic
//         });
num.forEach((element) => {
  console.log(element * element);
});

//->Array.form()
let names = 'sajin'
let arr = Array.from(names)
console.log(arr)

//->for...of
for(let i of num) {
    console.log(i)
}

//->for...in
for(let i in num) {
    console.log(i)
}