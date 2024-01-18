//burger menu

window.onload = function () {
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
}

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
    const prevButton = document.querySelector('.prev-slide');
    const nextButton = document.querySelector('.next-slide');
    const dashButtons = document.querySelectorAll('.dash__button');

    let slideIndex = 0

    prevButton.addEventListener('click', () => {
        slideIndex === 0 ? (slideIndex = 2) : slideIndex--;
        updateSliderContent()
    })

    nextButton.addEventListener('click', () => {
        slideIndex === 2 ? (slideIndex = 0) : slideIndex++;
        updateSliderContent()
    });

    dashButtons.forEach((e, index) => {
      e.addEventListener('click', () => {
        slideIndex = index;
        updateSliderContent();
        e.classList.toggle('active_dash');
      });
    });

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

    updateSliderContent();
})
