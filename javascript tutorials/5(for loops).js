//->'for' loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}

//->'for...in' loops
let obj = {
  apple: 12,
  ball: 13,
  cat: 14,
  dog: 15,
};
for (let a in obj) {
  console.log(a, "=", obj[a]);
}

//->'for...of' loop
let names = "sajin";
let arr = [1,2,3,4,5]
for (let a of names) {  //->note: Here, value after 'of' should either be string or array
  console.log(a);
}
for (let a of arr) { 
  console.log(a);
}

