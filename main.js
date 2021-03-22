const menuBtn = document.querySelector('.fas');
const menu = document.querySelector('nav');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('fa-times');
    menu.classList.toggle('active');
})