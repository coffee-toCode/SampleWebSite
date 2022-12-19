

//change navbar styles upon scroll

window.addEventListener('scroll', () => {
     document.querySelector('nav').classList.toggle('window-scroll',window.scrollY > 85)
})