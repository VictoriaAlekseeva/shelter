console.log(`110/110 все требования выполнены:
Реализация burger menu на обеих страницах: +26
при ширине страницы меньше 768рх панель навигации скрывается, появляется бургер-иконка: +2
при нажатии на бургер-иконку, справа плавно появляется адаптивное меню шириной 320px, бургер-иконка плавно поворачивается на 90 градусов: +4
высота адаптивного меню занимает всю высоту экрана: +2
при повторном нажатии на бургер-иконку или на свободное от бургер-меню пространство адаптивное меню плавно скрывается уезжая за правую часть экрана, бургер-иконка плавно поворачивается на 90 градусов обратно: +4
бургер-иконка создана при помощи html+css, без использования изображений: +2
ссылки в адаптивном меню работают, обеспечивая плавную прокрутку по якорям, сохраняются заданные на первом этапе выполнения задания требования интерактивности элементов меню: +2
при клике по любой ссылке (интерактивной или неинтерактивной) в меню адаптивное меню плавно скрывается вправо, бургер-иконка поворачивается на 90 градусов обратно: +2
расположение и размеры элементов в бургер-меню соответствует макету (центрирование по вертикали и горизонтали элементов меню, расположение иконки). При этом на странице Pets цветовая схема может быть как темная, так и светлая: +2
область, свободная от бургер-меню, затемняется: +2
страница под бургер-меню не прокручивается: +4


`)

const burgerMenuButton = document.querySelector('.burger-menu__button');
const burgerMenu = document.querySelector('.burger-menu');
const body = document.querySelector('body');
const burgerMenuOverlay = document.querySelector('.burger-menu__overlay');
const burgerMenuItem = document.querySelectorAll('.burger-menu__item');

function toggleMenu() {
  burgerMenu.classList.toggle('burger-menu_active');
  body.classList.toggle('burger-menu_active');
}

function closeMenu() {
  burgerMenu.classList.remove('burger-menu_active');
  body.classList.remove('burger-menu_active');
}

burgerMenuButton.addEventListener('click', toggleMenu);
burgerMenuOverlay.addEventListener('click', closeMenu);
burgerMenuItem.forEach((el) => el.addEventListener('click', closeMenu));

