const menuBtn=document.querySelector('.menu-btn');
const hamburger=document.querySelector('.menu-btn__burger');

const nav=document.querySelector('.nav');
const navMenu=document.querySelector('.menu-nav');

const menuNavItems=document.querySelectorAll('.menu-nav__item');
let showMenu=false;

menuBtn.addEventListener('click',toggleMenu);
function toggleMenu()
{
    if(!showMenu)
    {
        hamburger.classList.add('open');
        nav.classList.add('open');
        navMenu.classList.add('open');
        menuNavItems.forEach(item=>item.classList.add('open'));
        showMenu=true;
    }else
    {
        hamburger.classList.remove('open');
        nav.classList.remove('open');
        navMenu.classList.remove('open');
        menuNavItems.forEach(item=>item.classList.remove('open'));
        showMenu=false;
    }

}