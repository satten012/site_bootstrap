

window.addEventListener("scroll", function(){
    const headerNav = this.document.getElementById ("header-nav").classList.toggle("headernav-scroll", window.scrollY > 135)
})


/* скролл */
const offcanvasCartEl = document.getElementById("offcanvasCart")
const offcanvasCart = new bootstrap.Offcanvas(offcanvasCartEl)

document.getElementById("cart-open").addEventListener("click", (e) => {
    e.preventDefault();
    offcanvasCart.toggle();
})

const navLinks = document.querySelectorAll(".nav-item > .nav-link")

navLinks.forEach(function(e){
    e.addEventListener('click', function (event){
        event.preventDefault();

        const targetId = e.textContent.toLowerCase(); // Получаем идентификатор раздела из текста ссылки
        const targetSection = document.getElementById(targetId); // Находим соответствующий элемент

        if (targetSection) {
            const offset = 80; // Смещение вверх на 80px
            const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({
                top: targetPosition - offset,
                behavior: 'smooth'
            });
/*         let offcanvas  = document.querySelector(".offcanvas ")
        let fade = document.querySelector(".fade")
        offcanvas.classList.toggle("show")
        fade.classList.toggle("offcanvas-backdrop") */
/* 
        let offcanvas  = document.querySelector(".offcanvas ")
        offcanvas.classList.toggle("show") */

        }
    })
})

document.querySelectorAll('.closecart').forEach(item => {
    item.addEventListener("click", (e) => {
        e.preventDefault()
        offcanvasCart.hide();
        let href = item.dataset.href;
        document.getElementById(href).scrollIntoView()
    });
});

$(document).ready(function(){
    $(".owl-carousel-full").owlCarousel({
        margin:20,
        responsive:{ /* по сколько карточек на какой ширине */
            0:{ /* от 0 до 576 будет одна карточка */
                items:1
            },
            576:{/* от 576 до 768 будет две карточки */
                items:2
            },
            768:{ /* от 768 до 1000 будет три карточки */
                items:3
            },
            1000:{
                items:4
            }
        }
    });
});

const scrollTop = document.getElementById("top")

window.addEventListener("scroll", function(){
   if(window.scrollY > 350){
    scrollTop.style.display = "block"
   }
   else{
    scrollTop.style.display = "none"
   }
})

scrollTop.addEventListener("click", function(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
})


const arr = [10, 15, 18, 22.5, 18]
let minArr = 100


function functionMinArr(){
    for (i = 0; i < arr.length; i++){
        if (arr[i] < minArr){
            minArr = arr[i]
        };
    };
    console.log("min arr :" + minArr);
};

(() => {
    'use strict'

    const forms = document.querySelectorAll('.needs-validation');
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
})()


