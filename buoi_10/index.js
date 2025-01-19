// const mainEle = document.getElementsByClassName("_1");
// const element = document.createElement("p");
// element.innerText = "homiedev"; // thêm text vào thẻ p
// mainEle[0].appendChild(element);

const el = document.getElementsByClassName('_1')
console.log(el)
el[0].setAttribute('title', 'hello friends')
console.log(el[0].class)
el[0].className = 'list'