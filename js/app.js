const menuBtn = document.getElementById('menu-icon');
const nav = document.getElementById('nav');
const navLinks = document.querySelectorAll('#nav li a');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('fa-xmark');
    nav.classList.toggle('active')
})

navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        navLinks.forEach((link) => {
            link.classList.remove('active')
        })
        link.classList.add('active')
    })
})