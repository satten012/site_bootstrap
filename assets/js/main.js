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

document.querySelectorAll('.closecart').forEach(item => {
    item.addEventListener("click", (e) => {
        e.preventDefault()
        offcanvasCart.hide();
        let href = item.dataset.href;
        document.getElementById(href).scrollIntoView()
    });
})

/* document.querySelectorAll(".closecart").forEach(item => {
    item.addEventListener("click", (e) =>{
        e.preventDefault;
        offcanvasCart.hide()
        let href = item.dataset.href;
        offcanvasCartEl.addEventListener('hidden.bs.offcanvas', () => {
            document.getElementById(href).scrollIntoView({ behavior: 'smooth' });
          })
    })
}) */

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
        }
    }
    console.log("min arr :" + minArr) 
}

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
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