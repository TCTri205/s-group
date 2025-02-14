// Các loại funcion: 3 loại ()
// function a(){
//     console.log(a)
// }
// a()
//
// const functiona = (a, b) => {
//     console.log('arrow function ', a, b)
// }
//
// functiona(1,2)

// Object - chứa các cặp key-value
//const

let objA = {
    name : 'hehehe',
    age: 4,
    id: 1,
    action: () => {
        console.log('action')
    }
}

console.log(objA.age)

objA.action()

// Thêm cặp key-value mới
objA.mssv = 123
console.log(objA.mssv)

objA.name = 'TCT'
console.log(objA.name)

function Person(name,age){
    this.name = name
    this.age = age
    this.greet = function(){
        console.log('Hello, my name is ${this.name}.')
    }
}

const person1 = new Person('Alice', 30)
console.log(person1.greet)

const person2 = new Person('Bob', 32)

person1.abc = () => {
    console.log('aaa')
}

// cách thêm prototype cho object


console.log()

// for loop
const arr = [1,2,'a']
const obj = {
    a: 1,
    b: 2,
    c: 3
}

for(let i=0; i<arr.length; i++){
    console.log(arr[i])
}

// for in: lấy ra key của mảng hoặc object
for(let key in obj) {
    console.log(key + ': ' + obj[key])
}

for(let i of arr) {
    console.log(i)
}