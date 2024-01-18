import coffeeData from './coffeeData.js'
import teaData from './teaData.js';
import desertData from './desertsData.js';

function renderCards(data) {
    const section = document.querySelector('.main__menu-cards-section')
    const menuContainer = document.createElement('div')
    menuContainer.classList.add('menu-cards__container')
    section.appendChild(menuContainer)

    data.forEach((item) => {
        const menuCardsItem = document.createElement('div')
        menuCardsItem.classList.add('menu-cards__item')

        const menuCardsHeader = document.createElement('div')
        menuCardsHeader.classList.add('menu-cards__header')

        const imageElement = document.createElement('img')
        imageElement.classList.add('menu-cards__image')
        imageElement.src = item.src
        imageElement.alt = 'coffee drink example'

        const menuCardsDescription = document.createElement('div')
        menuCardsDescription.classList.add('menu-cards__description')

        const titleElement = document.createElement('p')
        titleElement.classList.add('menu-cards__title')
        titleElement.textContent = item.title

        const subtitleElement = document.createElement('p')
        subtitleElement.classList.add('menu-cards__subtitle', 'subtitle')
        subtitleElement.textContent = item.description

        const costElement = document.createElement('p')
        costElement.classList.add('menu-cards__title', 'menu-cards__cost')
        costElement.textContent = item.cost

        menuContainer.appendChild(menuCardsItem)
        menuCardsItem.appendChild(menuCardsHeader)
        menuCardsHeader.appendChild(imageElement)

        menuCardsItem.appendChild(menuCardsDescription)
        menuCardsDescription.appendChild(titleElement)
        menuCardsDescription.appendChild(subtitleElement)
        menuCardsDescription.appendChild(costElement)
    })
}

window.onload = function() {
  renderCards(coffeeData);
}

const coffeeBtn = document.querySelector('._coffee-btn');
const teaBtn = document.querySelector('._tea-btn');
const desertBtn = document.querySelector('._desert-btn')

coffeeBtn.addEventListener('click', function () {
    const container = document.querySelector('.menu-cards__container')
    container && container.remove('menu-cards__container')
    renderCards(coffeeData)
})

teaBtn.addEventListener('click', function () {
    const container = document.querySelector('.menu-cards__container')
    container && container.remove('.menu-cards__container')
    renderCards(teaData)
})

desertBtn.addEventListener('click', function () {
  const container = document.querySelector('.menu-cards__container')
  container && container.remove('.menu-cards__container')
  renderCards(desertData)
})