

let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () =>{
   menu.classList.toggle('fa-times');
   navbar.classList.toggle('active');
};

window.onscroll = () =>{
   menu.classList.remove('fa-times');
   navbar.classList.remove('active');
};

var swiper = new Swiper(".home-slider", {
   loop:true,
   cssMode: true,
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
   paceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
   pagination: {
     el: ".swiper-pagination",
   },
   mousewheel: true,
   keyboard: true,
 });


 
 
 let prevScrollPos = window.pageYOffset;
 const header = document.getElementById("header");

 window.onscroll = function () {
   const currentScrollPos = window.pageYOffset;

   if (prevScrollPos > currentScrollPos) {
     header.classList.remove("hide");
   } else {
     header.classList.add("hide");
   }

   prevScrollPos = currentScrollPos;
 };




