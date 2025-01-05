// types
const a = 123
console.log(a, typeof a);

let b = '1string';
console.log(b, typeof b)

var c = true;
console.log(c, typeof c)

const array = []
console.log(array, typeof array)

const object = {}
console.log(object, typeof object)

let d;
console.log(d, typeof d)

let f = null;
console.log(f, typeof f)

// LOOSE TYPE
let a1 = 3;   
console.log(a1)
a1 = 'abc'
console.log(a1)





// *** BTVN: 3 cách khai báo có gì khác biệt
// // operator (toan tu)
// let a2 = 1
// console.log(a2++)
// console.log(a2)

// const s1 = 'a'
// const s2 = 'b'
// console.log(s1+s2)
// console.log(s1==s2)

// const b1 = true
// const b2 = false
// console.log(b1 && b2)
// console.log(b1 || b2)

// const res = Boolean(b1)
// console.log(res)

// // Truthy, Falsy

// // if else
// // ARGUMENTS | VARIABLE | STATEMENT
// // if(args1){}
// // else if(args2) {}
// // else {}

// // switch (args){
// //     case 1:
// //         // do something
// //         break
// //     case 2:
// //     default:
// // }

// // loop
// loop1: for(i = 0; i<5; i++){
//     for(j=0; j<5; j++){
//         console.log(j)
//         if(j > 2) break loop1;
//     }
// }

// // while(true){
// //     //Do something
// // }

// // do{
// //     //Do something
// // }
// // while(true)


// // variable

// //SNAKE CASE
// const THIS_IS_CONSTANT = 'constant'

// //CAMEL CASE
// let thisIsLet = 'something changable'

// var va = 'something changable'

// //function

// function exambleFunction(var1, var2) {
//     // Do something
// }

// console.log(typeof exambleFunction)

// function sum (a, b){
//     return a + b
// }
// console.log(sum(1,2))

// STRING
let str = 'abc;ad;v'
// str.length()
// str.toUpperCase()
// str.toLowerCase()
console.log('\n   as  '.trim())

console.log(str.split(';'))

str.lastIndexOf('a')

// ARRAY
const arr = [1, 2, 3, 4]

arr.unshift(0)
arr.push(5, 6, 7)

arr.pop()
arr.shift()
console.log(arr)


console.log(arr.join(','))
