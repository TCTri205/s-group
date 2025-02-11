// Asyncn / sync (đồng bộ/bất đồng bộ)
// Event loop
// Call hell
// Promise
// Async / Await

// console.log('Start');
// console.log('1');
// setTimeout(() => {
//   console.log('2');
// }, 0);
// console.log('3');
// console.log('4');
// console.log('4');

// Promise: 3 trạng thái: pending, resolve, reject
// pending: chờ xử lý
// resolve: thực thi thành công
// reject: thực thi thất bại
const abc = new Promise((resolve, reject) => {
    console.log("start")
    if(true){
        resolve("Thanh cong")
    }
    else{
        reject("That bai")
    }
})

abc
.then(() => {
    
})
