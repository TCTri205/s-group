

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
            })
            card_body.classList.toggle("active")
        })
    })
})


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
        })
    }, { threshold: 0.1 })
    fearture_box.forEach(item => observer.observe(item))
})

document.addEventListener("DOMContentLoaded", () => {
    const fearture_box = document.querySelectorAll(".price-box-white, .price-box-grey")
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add("active")
                }, index * 500)
                observer.unobserve(entry.target)
            }
        })
    }, { threshold: 0.3 })
    fearture_box.forEach(item => observer.observe(item))
})

document.addEventListener("DOMContentLoaded", () => {
    const contactForms = document.querySelectorAll(".contact-form")

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active") // Thêm class active
                observer.unobserve(entry.target) // Dừng theo dõi phần tử này
            }
        })
    }, { threshold: 0.3 }) // Kích hoạt khi 30% phần tử xuất hiện

    contactForms.forEach(form => observer.observe(form))
})

document.addEventListener("DOMContentLoaded", function () {
    const mainServices = document.querySelector(".main-services")
    const header = document.querySelector(".header")

    window.addEventListener("scroll", function () {
        const scrollY = window.scrollY // Lấy vị trí cuộn dọc của trang
        const mainServicesTop = mainServices.offsetTop // Lấy vị trí top của .main-services
        const mainServicesHeight = mainServices.offsetHeight // Lấy chiều cao của .main-services
        const triggerPoint = mainServicesTop + mainServicesHeight * 1.455 // Tính vị trí 145.5%% của phần tử

        if (scrollY >= triggerPoint) {
            header.classList.add("sticky") // Thêm class khi cuộn qua 20% của .main-services
        } else {
            header.classList.remove("sticky") // Xóa class khi cuộn lên trên 20% của .main-services
        }
    })
})

document.addEventListener("DOMContentLoaded", () => {
    const item = document.querySelectorAll(".nd2-section-1")
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add("active");
                }, index * 250)
                observer.unobserve(entry.target)
            }
        })
    }, { threshold: 0.1 })
    item.forEach(item => observer.observe(item))
})

document.addEventListener("DOMContentLoaded", () => {
    const item = document.querySelectorAll(".padding-0-15.slideInLeft")
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add("active");
                }, index * 250)
                observer.unobserve(entry.target)
            }
        })
    }, { threshold: 0.1 })
    item.forEach(item => observer.observe(item))
})

// document.addEventListener("DOMContentLoaded", () => {
//     const item = document.querySelectorAll(".align-center.fadeIn")
//     const observer = new IntersectionObserver((entries) => {
//         entries.forEach((entry, index) => {
//             if (entry.isIntersecting) {
//                 setTimeout(() => {
//                     entry.target.classList.add("active");
//                 }, index * 250)
//                 observer.unobserve(entry.target)
//             }
//         })
//     }, { threshold: 0.6 })
//     item.forEach(item => observer.observe(item))
// })

document.addEventListener("DOMContentLoaded", () => {
    const contactForms = document.querySelectorAll(".align-center.fadeIn")

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active")
                observer.unobserve(entry.target)
            }
        })
    }, { threshold: 0.7 })

    contactForms.forEach(form => observer.observe(form))
})