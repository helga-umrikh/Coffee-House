//burger menu

document.addEventListener('DOMContentLoaded', function () {
    const menu_btn = document.querySelector('.header__hamburger')
    const mobile_menu = document.querySelector('.mobile-header')
    const nav_items = document.querySelectorAll('.nav_item')

    menu_btn.addEventListener('click', function () {
        menu_btn.classList.toggle('is-active')
        mobile_menu.classList.toggle('is-active')
    })

    nav_items.forEach(function (nav_item) {
        nav_item.addEventListener('click', function () {
            menu_btn.classList.toggle('is-active')
            mobile_menu.classList.toggle('is-active')
        })
    })
})

//data for slider

const sliderData = [
    {
        title: 'S’mores Frappuccino',
        description:
            'This new drink takes an espresso and mixes it with brown sugar and cinnamon before being topped withoat milk.',
        price: '$5.50',
        img_src: './assets/slider-img/coffee-slider-1.png',
    },
    {
        title: 'Caramel Macchiato',
        description:
            'Fragrant and unique classic espresso with rich caramel-peanut syrup, with cream under whipped thick foam.',
        price: '$5.00',
        img_src: './assets/slider-img/coffee-slider-2.png',
    },
    {
        title: 'Ice coffee',
        description:
            'A popular summer drink that tones and invigorates. Prepared from coffee, milk and ice.',
        price: '$4.50',
        img_src: './assets/slider-img/coffee-slider-3.png',
    },
]

//slider
document.addEventListener('DOMContentLoaded', function () {
    const prevButton = document.querySelector('.prev-slide')
    const nextButton = document.querySelector('.next-slide')
    const progressDashes = document.querySelectorAll('progress')

    let slideIndex = 0
    let duration = 5000
    let intervalProgressID;

    prevButton &&
        prevButton.addEventListener('click', () => {
            clearInterval(intervalProgressID);
            let currentProgressDash = progressDashes[slideIndex]
            currentProgressDash.value = 0;
            updateSliderIndex(false)
            updateCurrentSlide()
        })

    nextButton &&
        nextButton.addEventListener('click', () => {
            clearInterval(intervalProgressID);
            let currentProgressDash = progressDashes[slideIndex]
            currentProgressDash.value = 0;
            updateSliderIndex(true)
            updateCurrentSlide()
        })

    function updateSliderIndex(direction) {
        direction || (slideIndex === 0 ? (slideIndex = 2) : slideIndex--)
        direction && (slideIndex === 2 ? (slideIndex = 0) : slideIndex++)
    }

    function updateSliderContent() {
        const sliderImg = document.querySelector('.slider_src')
        const sliderTitle = document.querySelector('.slider__subtitle')
        const sliderDescription = document.querySelector('.slider__description')
        const sliderPrice = document.querySelector('.slider__subtitle')

        const currentSlide = sliderData[slideIndex]

        sliderImg.src = currentSlide.img_src
        sliderTitle.textContent = currentSlide.title
        sliderDescription.textContent = currentSlide.description
        sliderPrice.textContent = currentSlide.price
    }

    function fillSliderProgress(index) {
        let counterFillValue = 0
        let progressDuration = Math.floor(duration / 100)
        let currentProgressDash = progressDashes[index]

        if (intervalProgressID) {
            clearInterval(intervalProgressID)
        }

        intervalProgressID = setInterval(() => {
            if (counterFillValue >= 100) {
                clearInterval(intervalProgressID)
                counterFillValue = 0
                currentProgressDash.value = counterFillValue
                updateSliderIndex(true)
                updateCurrentSlide()
            }
            currentProgressDash.value = counterFillValue
            counterFillValue++
        }, progressDuration)
    }

    function updateCurrentSlide() {
        updateSliderContent()
        fillSliderProgress(slideIndex)
    }

    updateCurrentSlide()
})

//navigation from MenuPage to sections of home page

const favoriteButton = document.getElementById('favorite')
const aboutButton = document.getElementById('about')
const mobileAppButton = document.getElementById('mobile-app')

favoriteButton &&
    favoriteButton.addEventListener('click', function () {
        window.location.href = 'index.html#favorite-section'
    })

aboutButton &&
    aboutButton.addEventListener('click', function () {
        window.location.href = 'index.html#about-section'
    })

mobileAppButton &&
    mobileAppButton.addEventListener('click', function () {
        window.location.href = 'index.html#mobile-app-section'
    })
