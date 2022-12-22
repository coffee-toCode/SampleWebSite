

//change navbar styles upon scroll

window.addEventListener('scroll', () => {
     document.querySelector('nav').classList.toggle('window-scroll',window.scrollY > 85)
});


//display FAQ answers by toggling display

const faqs = document.querySelectorAll('.faq')      

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

     //change the 'plus' icon
          const icon = faq.querySelector('.faq__icon i'); 
          if(icon.className === 'uil uil-plus') {
              icon.className = "uil uil-minus";
          } else {
              icon.className = "uil uil-plus";
          }
    })
});



//toggle show/hide nav menu

const menu = document.querySelector(".nav_menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})

//close nav menu

const closeNav = document.querySelector("#close-menu-btn");       
closeNav.addEventListener('click', () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
})
