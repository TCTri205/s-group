// Viết lại các hàm map, forEach, find, finIndex, reduce, filter sử dụng vòng lặp for/while
const arr = [1, 2, 3, 4]

// map : trả về mảng mới, không thay đổi mảng gốc
function VD1(){
    function _map(arr, callback) {
        let res = []
        for(let i = 0; i < arr.length; i++){
            const tmp = callback(arr[i], i, arr)
            res.push(tmp)
        }
        return res
    }
    const map_ = _map(arr, n_i => n_i + 1)
    console.log(map_ )
    console.log(arr)
}
VD1()

// forEach : không trả về, thay đổi mảng gốc
function VD2(){
    function _forEach(arr, callback){
        for(let i = 0; i < arr.length; i++){
            arr[i] = callback(arr[i], i, arr)
        }
    }
    const forEach_ = _forEach(arr, n_i => n_i + 1)
    console.log(forEach_ )
    console.log(arr)
}
VD2()

// find : trả về phần tử đầu tiên thoả điều kiện
function VD3(){
    function _find(arr, callback){
        for(let i = 0; i < arr.length; i++) {
            if(callback(arr[i], i, arr)){
                return arr[i]
            }
        }
    }
    const find_ = _find(arr, n_i => n_i > 3)
    console.log(find_ )
    console.log(arr)
}
VD3()

// findIndex : trả về vị trí phần tử đầu tiên thoả điều kiện
function VD4(){
    function _findIndex(arr, callback){
        for(let i = 0; i < arr.length; i++){
            if(callback(arr[i], i, arr)){
                return i
            }
        }
    }
    const findIndex_ = _findIndex(arr, n_i => n_i > 3)
    console.log(findIndex_ )
    console.log(arr)
}
VD4()

// reduce : trả về một giá trị bằng cách duyệt mảng theo logic của callback
function VD5(){
    function _reduce(arr, callback, value_0){
        let res = value_0
        for(let i = 0; i < arr.length; i++){
            res = callback(res, arr[i])
        }
        return res
    }
    const reduce_ = _reduce(arr, (res,n_i) => res + n_i, 0)
    console.log(reduce_)
    console.log(arr)
}
VD5()

// filter : trả về mảng các phần tử thoả điều kiện
function VD6(){
    function _filter(arr, callback){
        let res = []
        for(let i = 0; i < arr.length; i++){
            if(callback(arr[i], i, arr)){
                res.push(arr[i])
            }
        }
        return res
    }
    const filter_ = _filter(arr, n_i => n_i % 2 === 0)
    console.log(filter_)
    console.log(arr)
}
VD6()

console.log("--------")
// Giải các bài tập dưới đây
// # Array Methods

// Give 2 arrays a and b. Merge a to b and print the new array.
// > Example:
// a=['a', 'b', 'c'];
// b=[1, 2, 3];
// Print: [1, 2, 3, 'a', 'b', 'c']
function BT1(){
    a=['a', 'b', 'c'];
    b=[1, 2, 3];
    const res = b.concat(a)
    console.log(res)
}
BT1()

// Give an array of number data. Print "Yes" if all elements of array is even numbers. Otherwise, print "No"
// [every()]
// > Example:
// data [1, 2, 3, 4, 5]; Print: "No"
// data [2, 4, 6]; Print: "Yes"
function BT2(){
    function solve(data){
        if(data.find(n => n % 2 === 1) === undefined){
            console.log("Yes")
        }
        else{
            console.log("No")
        }
    }
    data1 = [1, 2, 3, 4, 5]
    data2 = [2, 4, 6]
    solve(data2)
}
BT2()

// Give an array of number data. Print "Yes" if some of elements of array is even numbers. Otherwise, print "No"
// [some()]
// > Example:
// data [1, 2, 3, 4, 5]; Print: "Yes"
// data [1, 1, 3, 1, 5]; Print: "No"
function BT3(){
    function solve(data){
        if(data.find(n => n % 2 === 0) === undefined){
            console.log("No")
        }
        else{
            console.log("Yes")
        }
    }
    data1 = [1, 2, 3, 4, 5]
    data2 = [1, 1, 3, 1, 5]
    solve(data1)
}
BT3()

// Give an array of number datas. Find all positive numbers in the array, print a new array of positive numbers. [filter()]
// > Example:
// datas [1, -2, 3, 4, -5]; Print: [1, 3, 4]
function BT4(){
    data = [1, -2, 3, 4, -5]
    console.log(data.filter(n => n > 0))
}
BT4()

// Give an array of number data. Find first positive number in the array and print the index of that number [find() and findIndex()]
// and the number as format "(index) (value)". If there is no positive number in the array, print "No result".
// > Example:
// data[-1, -2, 3, 4, 5], the output should be: "2 3"
// data[-1, 2, 3, 4, 5], the output should be: "1 2"
// data[-1, -2], the output should be: "No result"
function BT5(){
    function solve(data){
        i = data.findIndex(n => n > 0)
        if(i === -1) {
            console.log("No result")
        }
        else{
            console.log(i, data.find(n => n > 0))
        }
    }
    data1 = [-1, -2, 3, 4, 5]
    data2 = [-1, 2, 3, 4, 5]
    data3 = [-1, -2]
    solve(data2)
}
BT5()


// Give a array of number data. use Array.forEach() to print elements in array that are divisible by 5 [forEach()]
// > Example:
// data = [1, 5, 30, 26]; print
// 5
// 30
function BT6(){
    data = [1, 5, 30, 26]
    data.forEach(n => {if(n % 5 === 0) console.log(n)})
}
BT6()


// Give a array of number data. find and print first index of value 2 and last index of value 2 in array [lastIndexOf()]
// > Example:
// data = [1, 2, 3, 4, 2, 6]; Print: "1 4"
// data = [6]; Print: "No result"
function BT7(){
    function solve(data){
        first = data.findIndex(n => n === 2)
        if(first === -1){
            console.log("No result")
        }
        else{
            console.log(first, data.lastIndexOf(2))
        }
    }
    data1 = [1, 2, 3, 4, 2, 6]
    data2 = [6]
    solve(data1)
}
BT7()


// Give array data. Join and print all of the elements in an array separated by commas and space [join()]
// > Example:
// data = ["A", "B", "C"]; Print: "A, B, C"
// data = [1, 2, 3]; Print: "1, 2, 3"
function BT8(){
    function solve(data){
        console.log(data.join(", "))
    }
    data1 = ["A", "B", "C"]
    data2 = [1, 2, 3]
    solve(data1)
}
BT8()

// [map()] Give a array of number data. Convert all of elements of array to absolute value of a number into new array and print this array
// > Example:
// data = [2, -1, -8]; Print output: [2, 1, 8]
function BT9(){
    data = [2, -1, -8]
    const res = data.map(n => Math.abs(n))
    console.log(res)
}
BT9()
