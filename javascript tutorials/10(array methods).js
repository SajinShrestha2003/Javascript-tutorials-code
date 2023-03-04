let num = [1, 2, 3, 4, 5, 6];
console.log(num)
console.log(typeof num)

let a = num.toString()  //->converting to a string
console.log(a)
console.log(typeof a)

let b = num.join('_')   //->join elements of arrays with '_' instead of ','
console.log(b)
console.log(typeof b)

let c=num.pop() //->remove the element {default: last element}
console.log(num,'removed element =', c)