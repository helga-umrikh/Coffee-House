window.onload = function () {
  const menu_btn = document.querySelector('.header__hamburger');
  const mobile_menu = document.querySelector('.mobile-header');
  const nav_items = document.querySelectorAll('.nav_item');

  menu_btn.addEventListener('click', function () {
    menu_btn.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
  });

  nav_items.forEach(function (nav_item) {
    nav_item.addEventListener('click', function () {
      menu_btn.classList.toggle('is-active');
      mobile_menu.classList.toggle('is-active');
    });
  });
}