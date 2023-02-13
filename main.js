'use strict'

const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    if(window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark');
    }
});


// navbar scroll to id
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
    
    const target = event.target;
    const link = target.dataset.link;
    if (link == null) {
        return;       
    }

    console.log(event.target.dataset.link);
    const scrollTo = document.querySelector(link);
    scrollTo.scrollIntoView({behavior: "smooth"});
});

