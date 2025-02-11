

let flex_column_item_img = document.getElementById('flex-column-item-img')
// Thay đổi giá trị của thuộc tính src
// img.src = 'image2.jpg'
let flex_column_item = document.querySelectorAll('.flex-column-item')

flex_column_item[0].addEventListener('click', function() {
    flex_column_item.forEach(i => i.classList.remove('active'))
    this.classList.add('active')
    flex_column_item_img.src = "images/about2.jpg"
})
flex_column_item[1].addEventListener('click', function() {
    flex_column_item.forEach(i => i.classList.remove('active'))
    this.classList.add('active')
    flex_column_item_img.src = "images/about5.jpg"
})
flex_column_item[2].addEventListener('click', function() {
    flex_column_item.forEach(i => i.classList.remove('active'))
    this.classList.add('active')
    flex_column_item_img.src = "images/about1.jpg"
})


document.addEventListener("DOMContentLoaded", function () {
    const card = document.querySelectorAll(".card");
    card.forEach(item => {
        const card_body = item.querySelector(".card-body");
        item.addEventListener("click", function () {
            // const isActive = card_body.classList.contains("active");
            card.forEach(i => {
                const other_body = i.querySelector(".card-body");
                if (other_body !== card_body) {
                    other_body.classList.remove("active");
                }
            });
            card_body.classList.toggle("active")
        });
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const fearture_box = document.querySelectorAll(".feature-box")
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add("active");
                }, index * 250)
                observer.unobserve(entry.target)
            }
        });
    }, { threshold: 0.1 })
    fearture_box.forEach(item => observer.observe(item))
})

document.addEventListener("DOMContentLoaded", () => {
    const fearture_box = document.querySelectorAll(".price-box-white, .price-box-grey")
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add("active");
                }, index * 500)
                observer.unobserve(entry.target)
            }
        });
    }, { threshold: 0.3 })
    fearture_box.forEach(item => observer.observe(item))
})


// window.addEventListener("scroll", function() {
//     const header = document.getElementById("header");
//     if (window.scrollY > 1300) {
//         header.classList.add("sticky");
//     } else {
//         header.classList.remove("sticky");
//     }
// });