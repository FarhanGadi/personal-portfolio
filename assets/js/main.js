/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav_menu'),
    navToggle = document.getElementById('nav_toggle'),
    navClose = document.getElementById('nav_close')


/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}
/*============= Skills Bar ===============*/
const skills = document.querySelectorAll('.skills_name')
for (const skill of skills.values()) {
    const percentage = skill.nextElementSibling.textContent
    const skillBar = skill.parentElement.nextElementSibling.firstElementChild
    skillBar.style.width = percentage
}
/*==================== REMOVE MENU MOBILE ====================*/
const navLinks = document.querySelectorAll('.nav_link')
function Linkactions() {
    const navMenu = document.getElementById('nav_menu')
    navMenu.classList.remove('show-menu')
}
navLinks.forEach(e => e.addEventListener('click', Linkactions))

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills_content')
const skillsHeader = document.querySelectorAll('.skills_header')

function toggleSkills() {
    let itemClass = this.parentNode.className

    for (i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills_content skills_close'

    }

    if (itemClass === 'skills_content skills_close') {
        this.parentNode.className = 'skills_content skills_open'

    }

}
skillsHeader.forEach(el => el.addEventListener('click', toggleSkills))


/*==================== QUALIFICATION TABS ====================*/


/*==================== SERVICES MODAL ====================*/

const modalViews = document.querySelectorAll('.services_modal'),
    modalBtns = document.querySelectorAll('.services_button'),
    modalCloses = document.querySelectorAll('.services_modal-close')


let modal = function (modalClick) {
    modalViews[modalClick].classList.add('active-modal')
}
modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => modal(i))
})
modalCloses.forEach((modalClosed, i) => {
    modalClosed.addEventListener('click', () => {
        modalViews.forEach((modalview)=>{
            modalview.classList.remove('active-modal')
        })
    })
})



/*==================== PORTFOLIO SWIPER  ====================*/


/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/


/*==================== CHANGE BACKGROUND HEADER ====================*/


/*==================== SHOW SCROLL UP ====================*/


/*==================== DARK LIGHT THEME ====================*/ 