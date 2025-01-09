const a = 1.4
const b = 1.6

console.log(Math.round(a)) // 1
console.log(Math.round(b)) // 2

console.log(Math.floor(a)) // 1
console.log(Math.floor(b)) // 1

console.log(Math.ceil(a)) // 2
console.log(Math.ceil(b)) // 2

console.log(Math.trunc(a)) // 1
console.log(Math.trunc(b)) // 1

console.log(Math.min(a, b, 3, 4, 2)) // 1.4
console.log(Math.max(a, b, 1, 'hshs')) // NaN

console.log(Math.random() * 10)