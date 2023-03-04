//->'while' loop
let i = 0;
let n = 3;
while (i < n) {
  console.log(i);
  i++;
}

//->'do...while' loop
let x = 0;
let y = 5;
do {
  console.log(x);
  x++;
} while (x < y);

//->'do...while' loop run at least one time
//eg:
let a = 10;
let b = 12;
do {
  console.log(a);
} while (a > b);    //->here value of a will be printed even if the given condition is false