/* if (matchMedia("screen and (min-width: 760px)").matches) {
}

$('#mobile').on('click', () => {
   $('.nav-bar').slideToggle()
}) */



if (matchMedia("screen and (max-width: 1200px)").matches) {
   $('.mobile-btn').on('click', () => {
      $('.nav-bar').slideToggle()
   })
}


/* const globalNav = document.querySelector(".nav-nav");
      const mobileBtn = document.querySelector(".mobile-btn");

      mobileBtn.addEventListener('click', () => globalNav.classList.toggle('active')); */
