// // // const app = document.querySelector('#app')
// // // const button = document.querySelectorAll('button')


// // // function render(i) {
// // //     const div = document.createElement('div')
// // //     div.innerText = i + '.' + data.results[i].name
// // //     app.appendChild(div)
// // // }

// // // for(let i=0; i<5; i++){
// // //     render(i)
// // // }

// // // function handleLoadMore() {
// // //     console.log('LoadMoreFunction')
// // //     for(let i=6; i<11; i++){
// // //         render(i)
// // //     }
// // // }



// // // button.onclick = handleLoadMore

// // // button.addEventListener('click', function() {
// // //     handleLoadMore()
// // // })




// // const arr = ['a', 'b', 'c']

// // // arr.forEach(
// // //     function(value, index, array){
// // //         console.log(value)
// // //         console.log(index)
// // //         console.log(array)
// // //     }
// // // )

// // // const result = arr.forEach(
// // //     function(value, index, array){
// // //         newArr.push(index)
// // //     }
// // // )

// // // const newArr = arr.map(
// // //     function (value,index, arr){
// // //         return value
// // //     }
// // // )

// // // console.log(newArr)


// // // const res = data.results.find(
// // //     function (object, index, arr){
// // //         return object.name === 'pikachu'
// // //     }
// // // )

// // const res = data.results.filter(
// //     function (object,index, arr){
// //         return object.name.includes('pi')
// //     }
// // )

// // console.log(res)

// const input = document.querySelector("input")
// // input.value
// // 'oninput'

// input.addEventListener("input", function(){
//     const result = data.results.filter({
//         function(object, index, array){
//             return object.name.includes(input.value)
//         }
//     })
//     console.log(result)
// })

const arr = [1,2,3]

const res = arr.reduce(
    function(previousValue, currentValue, currentIndex, array) {
        console.log(currentValue)
    },
    0
)

console.log(res)