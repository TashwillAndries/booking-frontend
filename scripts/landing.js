let header = document.querySelector('.header')
let menu = document.querySelector('.nav-links')


menu.addEventListener('click', function(){
    header.classList.toggle('menu-active')
})