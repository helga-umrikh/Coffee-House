window.onload = function () {
  const menu_btn = document.querySelector('.header__hamburger');
  const mobile_menu = document.querySelector('.mobile-header')

  menu_btn.addEventListener('click', function () {
    menu_btn.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
  });
}