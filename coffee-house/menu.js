import coffeeData from './coffeeData.js';

document.addEventListener('DOMContentLoaded', () => {

const coffeeSection = document.querySelector('._coffee');
const menuContainer = document.createElement('div');
menuContainer.classList.add('menu-cards__container');
coffeeSection.appendChild(menuContainer);
  

coffeeData.forEach(item => {

  const menuCardsItem = document.createElement('div');
  menuCardsItem.classList.add('menu-cards__item');

  const menuCardsHeader = document.createElement('div');
  menuCardsHeader.classList.add('menu-cards__header');

  const imageElement = document.createElement('img');
  imageElement.classList.add('menu-cards__image');
  imageElement.src = item.src;
  imageElement.alt = 'coffee drink example';



  const menuCardsDescription = document.createElement('div');
  menuCardsDescription.classList.add('menu-cards__description');

  const titleElement = document.createElement('p');
  titleElement.classList.add('menu-cards__title');
  titleElement.textContent = item.title;

  const subtitleElement = document.createElement('p');
  subtitleElement.classList.add('menu-cards__subtitle', 'subtitle');
  subtitleElement.textContent = item.description;

  const costElement = document.createElement('p');
  costElement.classList.add('menu-cards__title', 'menu-cards__cost');
  costElement.textContent = item.cost;


  menuContainer.appendChild(menuCardsItem);
  menuCardsItem.appendChild(menuCardsHeader);
  menuCardsHeader.appendChild(imageElement);

  menuCardsItem.appendChild(menuCardsDescription);
  menuCardsDescription.appendChild(titleElement);
  menuCardsDescription.appendChild(subtitleElement);
  menuCardsDescription.appendChild(costElement);

})
}) 
