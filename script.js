// let menu = document.querySelector('menu-btn');
// let navbar = document.querySelector('.header .navbar');

// menu.onclik = () =>{
//     menu.classList.toggle('fa-times');
// }

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
   pagination: {
     el: ".swiper-pagination",
   },
   mousewheel: true,
   keyboard: true,
 });
 
//  var swiper = new Swiper(".home-slider", {
//    spaceBetween: 30,
//    centeredSlides: true,
//    autoplay: {
//      delay: 2500,
//      disableOnInteraction: false,
//    },
//    pagination: {
//      el: ".swiper-pagination",
//      clickable: true,
//    },
//    navigation: {
//      nextEl: ".swiper-button-next",
//      prevEl: ".swiper-button-prev",
//    },
//    mousewheel: true,
//    keyboard: true,
//    loop:true,
//    cssMode: true,
//  });


// $(function(){
//   var lastScrollTop = 0, delta = 15;
//   $(window).scroll(function(event){
//      var st = $(this).scrollTop();
     
//      if(Math.abs(lastScrollTop - st) <= delta)
//         return;
// if ((st > lastScrollTop) && (lastScrollTop>0)) {
//      // downscroll code
//     $("header").css("top","-80px");

//  } else {
//     // upscroll code
//     $("header").css("top","0px");
//  }
//      lastScrollTop = st;
//   });
// });

const hiddenElements = document.querySelectorAll('.box');
hiddenElements.forEach((el)=>observer.observe(el));

let loadMoreBtn = document.querySelector('.packages .load-more .btn');
let currentItem = 3;

loadMoreBtn.onclick = () => {
   let boxes = [...document.querySelectorAll('.packages .box-container .box')];
   for (var i = currentItem; i < currentItem + 3; i++) {
      boxes[i].style.display = 'inline-block';
   };
   currentItem += 3;
   if (currentItem >= boxes.length) {
      loadMoreBtn.style.display = 'none';
   }
}
//  Image credits
//  https://pixabay.com/vectors/boxing-ring-wrestling-wrestler-149840/
//  https://pixabay.com/illustrations/retro-background-the-consignment-4237850/
//  https://pixabay.com/illustrations/fractals-environment-chess-1728594/
//  https://pixabay.com/photos/