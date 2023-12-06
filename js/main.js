const menuBtn = document.querySelector('.menu__btn');
const menuClose = document.querySelector('.menu__close-btn');
const menuList = document.querySelector('.menu__list');
const menuGround = document.querySelector('.menu--ground');

const closeMenu = () => {
  menuList.classList.remove('menu__list-open');
  menuGround.classList.remove('menu--open');
};

menuBtn.addEventListener('click', (event) => {
  event.stopPropagation();
  menuList.classList.toggle('menu__list-open');
  menuGround.classList.toggle('menu--open');
});

menuClose.addEventListener('click', (event) => {
  event.stopPropagation();
  closeMenu();
});

document.addEventListener('click', (event) => {
  if (!(event.target == menuList || menuList.contains(event.target))) {
    closeMenu();
  }
});
