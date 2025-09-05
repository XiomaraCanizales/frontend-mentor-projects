const navToggle = document.querySelector('.nav-toggle')
const navBar = document.getElementById('nav')

navToggle.addEventListener('click', () => {
    navBar.classList.toggle('show-links')
})