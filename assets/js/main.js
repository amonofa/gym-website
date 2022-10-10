const navMenu = document.querySelector('#nav-menu');
const navToggle = document.querySelector('#nav-toggle');
const navClose = document.querySelector('#nav-close');


if(navToggle) {
    navToggle.addEventListener('click',  () => {
        navMenu.classList.add('show-menu')
    })
}

if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}


const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
    const navMenu = document.querySelector('#nav-menu')
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))


// change background header 

const scrollHeader = () => {
    const header = document.querySelector('#header')

    this.scrollY >= 50 ? header.classList.add('bg-header')
                        : header.classList.remove('bg-header')
}

window.addEventListener('scroll', scrollHeader)


// calculate js 

const calculateForm = document.querySelector('#calculate-form')
const calculateCm = document.querySelector('#calculate-cm')
const calculateKg = document.querySelector('#calculate-kg')
const calculateMessage = document.querySelector('#calculate-message')


const calculateBmi = (e) => {
    e.preventDefault()

    if(calculateCm.value === '' || calculateKg.value === '') {
        calculateMessage.classList.remove('color-green')
        calculateMessage.classList.add('color-red')

        calculateMessage.textContent = 'Fill in the Height and Weight 🏋️‍♀️'


        setTimeout(() => {
            calculateMessage.textContent = ''
        }, 3500)
    } else {
        const cm = calculateCm.value / 100,
            kg = calculateKg.value,
            bmi = Math.round(kg / (cm * cm))
    
        if(bmi < 18.5) {
            calculateMessage.classList.add('color-green')
            calculateMessage.textContent = `Your BMI is ${bmi} and you are skinny 😔`
        }else if (bmi < 25){
            calculateMessage.classList.add('color-green')
            calculateMessage.textContent = `Your BMI is ${bmi} and you are healthy 😇`
        }else {
            calculateMessage.classList.add('color-green')
            calculateMessage.textContent = `Your BMI is ${bmi} and you are overweight 😥`
        }

        calculateCm.value = ''
        calculateKg.value = ''
        

        setTimeout(() => {
            calculateMessage.textContent = ''
        }, 4500);
    }
}

calculateForm.addEventListener('submit', calculateBmi)

// Email JS 

const contactForm = document.querySelector('#contact-form'),
    contactMessage = document.querySelector('#contact-message'),
    contactUser = document.querySelector('#contact-user')
const sendEmail = (e) => {
    e.preventDefault()

    if(contactUser.value === '') {
        contactMessage.classList.remove('color-green')
        contactMessage.classList.add('color-red')

        contactMessage.textContent = 'You must enter your email ☝'

        setTimeout(() => {
            contactMessage.textContent = ''
        }, 3000)
    }else {
        emailjs.sendForm('service_gymwebsite','template_gym-webiste','#contact-form','QXVL8U8j-DgrrCP2r')
        .then(() => {
            contactMessage.classList.add('color-green')
            contactMessage.textContent = 'You registered successfully 💪'

            setTimeout(() => {
                contactMessage.textContent = ''
            }, 3000)
        }, (error) => {
            alert(`OOPS! SOMETHING HAS FAILED...`, error)
        })

        contactUser.value = ''
    }
}


contactForm.addEventListener('submit', sendEmail)


const scrollUp = () => {
    const scrollUp = document.querySelector('#scroll-up')

    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)


const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal(`.home__data, .footer__container, .footer__group`)
sr.reveal(`.home__img`, {delay: 700, origin: 'bottom'})
sr.reveal(`.logos__img, .program__card, .pricing__card`, {interval: 100} )
sr.reveal(`.choose__img, .calculate__content`, {origin: 'left'})
sr.reveal(`.choose__content, .calculate__img`, {origin: 'right'})




const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollY = window.pageXOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop = 58,
            sectionId = current.getAttribute('id'),
            sectionSClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')


            if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight ) {
                sectionSClass.classList.add('active-link')
            }else {
                sectionSClass.classList.remove('active-link')
            }
    })
}

window.addEventListener('scroll', scrollActive)