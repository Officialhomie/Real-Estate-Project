const faqs = document.querySelectorAll(".faq");
const navIcons = document.querySelector('nav i');
const nav = document.querySelector("nav")



faqs.forEach(faqq =>{
    faqq.addEventListener("click", ()=>{
        faqq.classList.toggle("active")
    })
})


function toggleDisplay() {
    console.log("dfgh");
    nav.classList.toggle("show-nav")
}
navIcons.addEventListener("click", toggleDisplay)

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
        responsiveClass:true,
        autoplay:true,
        navText: ["<i class='bi bi-chevron-left'></i>", "<i class='bi bi-chevron-right'></i>"],
        responsive:{
            0:{
                items:1,
                nav:true
            },
            700:{
                items:2,
                nav:false,
                margin:50
            },
            1000:{
                items:3,
                nav:true,
                // loop:false
            },
            1200:{
                items:4,
                nav:true,
                // loop:false
            },
            1500:{
                items:5,
                nav:true,
                // loop:false
            }
        }
        });
  });

$(document).ready(function(){
    $(".owl-carousel-1").owlCarousel({
        loop:true,
        responsiveClass:true,
        autoplay:true,
        margin:50,
        responsive:{
            0:{
                items:1,
                // nav:true
            },
            700:{
                items:2,
                nav:false,
                margin:50
            },
            1000:{
                items:3,
                // nav:true,
                loop:false
            }
        }
        });
  });

