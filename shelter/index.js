console.log(`66/110 выполнены:
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

Реализация слайдера-карусели на странице Main: +28
при нажатии на стрелки происходит переход к новому блоку элементов: +4
смена блоков происходит с соответствующей анимацией карусели (способ выполнения анимации не проверяется): +4
при переключении влево или вправо прокручивается ровно столько карточек, сколько показывается при текущей ширине экрана (3 для 1280px, 2 для 768px, 1 для 320px): +4
в следующем блоке нет дублирования карточек с текущим блоком. Например в слайдере из 3 элементов, следующий выезжающий слайд будет содержать 3 (из 8 доступных) новых карточки питомца, таких, каких не было среди 3х карточек на предыдущем уехавшем слайде: +4
при каждой перезагрузке страницы формируется новая последовательность карточек: +2
генерация наборов карточек происходит на основе 8 объектов с данными о животных: +2
при изменении ширины экрана (от 1280px до 320px и обратно), слайдер перестраивается и работает без перезагрузки страницы (набор карточек при этом может как изменяться, так и оставаться тем же, скрывая лишнюю или добавляя недостающую, и сохраняя при этом описанные для слайдера требования): +4

Реализация попап на обеих страницах: +12
попап появляется при нажатии на любое место карточки с описанием конкретного животного: +2
часть страницы вне попапа затемняется: +2
при открытии попапа вертикальный скролл страницы становится неактивным, при закрытии - снова активным: +2
при нажатии на область вокруг попапа или на кнопку с крестиком попап закрывается, при этом при нажатии на сам попап ничего не происходит: +2
кнопка с крестиком интерактивная: +2
окно попапа (не считая кнопку с крестиком) центрировано по всем осям, размеры элементов попапа и их расположение совпадают с макетом: +2

`)



window.onload = function() {
  console.log('Hello Rolling Scopes!');

  fillFriendsCard();
  if (friendsWrapperMain) friendsWrapperMain.addEventListener('animationend', carousel);

}

window.onresize = function() {
  fillFriendsCard();
  if (friendsWrapperMain) friendsWrapperMain.addEventListener('animationend', carousel);
}


// burger menu
const burgerMenuButton = document.querySelector('.burger-menu__button');
const burgerMenu = document.querySelector('.burger-menu');
const body = document.querySelector('body');
const burgerMenuOverlay = document.querySelector('.burger-menu__overlay');
const burgerMenuItem = document.querySelectorAll('.burger-menu__item');

function toggleMenu() {
  burgerMenu.classList.toggle('burger-menu_active');
  body.classList.toggle('no-scroll');
}

function closeMenu() {
  burgerMenu.classList.remove('burger-menu_active');
  body.classList.remove('no-scroll');
}

burgerMenuButton.addEventListener('click', toggleMenu);
burgerMenuOverlay.addEventListener('click', closeMenu);
burgerMenuItem.forEach((el) => el.addEventListener('click', closeMenu));

// pets cards

//!move to separate file and add import
const pets = [
  {
    "id": "0",
    "name": "Jennifer",
    "img": "./src/img/pets-jennifer.png",
    "type": "Dog",
    "breed": "Labrador",
    "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    "age": "2 months",
    "inoculations": ["none"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "id": "1",
    "name": "Sophia",
    "img": "./src/img/pets-sophia.png",
    "type": "Dog",
    "breed": "Shih tzu",
    "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    "age": "1 month",
    "inoculations": ["parvovirus"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "id": "2",
    "name": "Woody",
    "img": "./src/img/pets-woody.png",
    "type": "Dog",
    "breed": "Golden Retriever",
    "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    "age": "3 years 6 months",
    "inoculations": ["adenovirus", "distemper"],
    "diseases": ["right back leg mobility reduced"],
    "parasites": ["none"]
  },
  {
    "id": "3",
    "name": "Scarlett",
    "img": "./src/img/pets-scarlett.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    "age": "3 months",
    "inoculations": ["parainfluenza"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "id": "4",
    "name": "Katrine",
    "img": "./src/img/pets-katrine.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    "age": "6 months",
    "inoculations": ["panleukopenia"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "id": "5",
    "name": "Timmy",
    "img": "./src/img/pets-timmy.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    "age": "2 years 3 months",
    "inoculations": ["calicivirus", "viral rhinotracheitis"],
    "diseases": ["kidney stones"],
    "parasites": ["none"]
  },
  {
    "id": "6",
    "name": "Freddie",
    "img": "./src/img/pets-freddie.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    "age": "2 months",
    "inoculations": ["rabies"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "id": "7",
    "name": "Charly",
    "img": "./src/img/pets-charly.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    "age": "8 years",
    "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
    "diseases": ["deafness", "blindness"],
    "parasites": ["lice", "fleas"]
  }
]

function petsCardsMix(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

function generateFriendsCard(id, img, name) {
  let template = `
  <img src=${img} alt=${name} class="friend__img">
  <h4 class="friend__name">${name}</h4>
  <a class="button-link button-link_bordered">Learn more</a>
  `;
  let friendsCard = document.createElement('div');
  friendsCard.className = 'friends__card';
  friendsCard.setAttribute('data-id', id);

  friendsCard.innerHTML = template;

  return friendsCard;
}

const friendsWrapper = document.querySelector('.friends__wrapper') || document.querySelector('.friends-cards__wrapper');
const friendsWrapperMain = document.querySelector('.friends__wrapper');
const friendsWrapperPets = document.querySelector('.friends-cards__wrapper');

// const getFriendsWrapper = () => {
//   friendsWrapper.innerHTML = '';
//   return friendsWrapper;
// };

const renderFriendCardMain = (num) => {

  if (!friendsWrapperMain) return;
  // let friendsWrapper = getFriendsWrapper();
  friendsWrapperMain.innerHTML = '';

  let mixedPets = pets.slice();
  petsCardsMix(mixedPets);

  let randomPet = Math.floor(Math.random() * 5) // слйчайный номер карточки животного из диапазона первых двух карточек слайдера для дозаполнения слайдера из 9 элементов.

  mixedPets.push(mixedPets[randomPet]); // добавляем новый элемент в массив, в итоге получаем 9 карточек

  let slidesId = ['item-left', 'item-active', 'item-right'];

  for (let slideNum = 0; slideNum < slidesId.length; slideNum++) { // генерируем слайды
    let friendSlide = document.createElement('div');
    friendSlide.className = 'friends__slide';
    friendSlide.id = slidesId[slideNum];

    for (let i = slideNum * num / 3; i < (slideNum * num / 3) + num / 3; i++) { //генерируем карточки в слайде. num / 3 - количество карточек в слайде под разную ширину экрана
      let newCard = generateFriendsCard(mixedPets[i].id, mixedPets[i].img, mixedPets[i].name)
      friendSlide.append(newCard);
    }
    friendsWrapperMain.append(friendSlide);
  }
  // console.log('pets', pets, 'mixedPets', mixedPets, 'pets[randomPet]', pets[randomPet], 'randomPet', randomPet)
  return friendsWrapperMain;
}

// const renderFriendCardMain = (num) => {
//   if (document.querySelector('.friends__wrapper')) renderFriendCard(num);
// }

const renderFriendCardPets = (num) => {

  if (!friendsWrapperPets) return;

  let petsCards = [];
  for (let i = 0; i < 6; i++) {
    petsCards = petsCards.concat(petsCardsMix(pets));
  }
  console.log (petsCards);

  // 48/num - 48 общее число карточек животных в массиве
  friendsWrapperPets.innerHTML = '';

  let petsOnSlide = petsCards.length / num;

  for (let i = 0; i < petsOnSlide; i++) {
  let friendsCardSlide = document.createElement('div');
  friendsCardSlide.className = "friends-card__slide";
    for (let j = 0; j < num; j++) {
      let newCard = generateFriendsCard(petsCards[j].id, petsCards[j].img, petsCards[j].name)
      friendsCardSlide.append(newCard);
    }

  friendsWrapperPets.append(friendsCardSlide);
  }

  // let mixedPets = pets.slice();
  // petsCardsMix(mixedPets);


// console.log('pets', pets, 'mixedPets', mixedPets, 'pets[randomPet]', pets[randomPet], 'randomPet', randomPet)
return friendsWrapperPets;

}

const fillFriendsCard = () => {
  let width = window.innerWidth;

  if (width <= 489) {
    renderFriendCardMain(3);
    renderFriendCardPets(3);
  } else if ((width > 489) && (width <= 991)) {
    renderFriendCardMain(6);
    renderFriendCardPets(6);
  } else {
    renderFriendCardMain(9);
    renderFriendCardPets(8);
  }
}


//modal window
let ourFriendsWrapper = document.querySelector('.our-friends__wrapper') || document.querySelector('.our-friends-pets__wrapper');

function openModal(id) {
  let template = `
          <div class="friends-modal__overlay"></div>
          <div class="friends-modal__card">
            <span class = "friends-modal__close-button"></span>
            <img src=${pets[id].img} alt="Jennifer" class="friends-modal__img">
            <div class="friends-modal__description">
              <h3 class="friends-modal__name">${pets[id].name}</h3>
              <h4 class="friends-modal__type">${pets[id].type} - ${pets[id].breed}</h4>
              <p class="friends-modal__text">${pets[id].description}</p>
              <ul class="friends-modal__list">
                <li><span class="text-bold">Age:</span> ${pets[id].age}</li>
                <li><span class="text-bold">Inoculations:</span> ${pets[id].inoculations}</li>
                <li><span class="text-bold">Diseases:</span> ${pets[id].diseases}</li>
                <li><span class="text-bold">Parasites:</span> ${pets[id].age}</li>
              </ul>
            </div>
          </div>
        `

  let friendModalWindow = document.createElement('div');
  friendModalWindow.className = 'friends-modal__window';
  friendModalWindow.innerHTML = template;
  ourFriendsWrapper.prepend(friendModalWindow);

  body.classList.add('no-scroll');

  return ourFriendsWrapper;
}


friendsWrapper.onclick = function (event) {
  let target = event.target.closest('.friends__card');

  if (target.className === 'friends__card') {
    let id = target.getAttribute('data-id');

    let modalId = pets.findIndex(el => el.id === id)
    openModal(modalId);
  }
}


//close modal

function closeModal() {
  let friendModalWindow = document.querySelector('.friends-modal__window');
  friendModalWindow.remove();
  body.classList.remove('no-scroll');
}

ourFriendsWrapper.onclick = function (event) {
  let target = event.target;

  if ((target.className === 'friends-modal__overlay') || (target.className === 'friends-modal__close-button')) {
    closeModal();
  }
}


// carousel main

const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');


const moveLeft = () => {
  friendsWrapperMain.classList.add('transition-left');
  arrowLeft.removeEventListener('click', moveLeft); // отключаем EL чтобы нельзя было нажимать кнопки пока происходит анимация
  arrowRight.removeEventListener('click', moveRight);
}

const moveRight = () => {
  friendsWrapperMain.classList.add('transition-right');
  arrowLeft.removeEventListener('click', moveLeft);
  arrowRight.removeEventListener('click', moveRight);
}

if (arrowLeft) {arrowLeft.addEventListener('click', moveLeft);}
if (arrowRight) {arrowRight.addEventListener('click', moveRight);}


function carousel(animationEvent) {

  let slideLeft = document.querySelector('#item-left');
  let slideRight = document.querySelector('#item-right');
  let slideActive = document.querySelector('#item-active');
  let changedSlide;

  if (animationEvent.animationName === ('move-left-desktop' || 'move-left-tablet' || 'move-left-mobile')) {
    friendsWrapperMain.classList.remove('transition-left');
    changedSlide = slideLeft;
    console.log(slideLeft);
    console.log(changedSlide);
    slideRight.innerHTML = slideActive.innerHTML;
    slideActive.innerHTML = changedSlide.innerHTML;
  } else if (animationEvent.animationName === ('move-right-desktop' || 'move-right-tablet' || 'move-right-mobile')) {
    friendsWrapperMain.classList.remove('transition-right');
      changedSlide = slideRight;
      console.log(slideRight);
      console.log(changedSlide);
      slideLeft.innerHTML = slideActive.innerHTML;
      slideActive.innerHTML = changedSlide.innerHTML;
  }

  changedSlide.innerHTML = '';

  let cardsCounter = document.querySelector('#item-active').childNodes.length;
  for (let i = 0; i < cardsCounter; i++) {
    let num = Math.floor(Math.random() * 7);
    changedSlide.append(generateFriendsCard(pets[num].id, pets[num].img, pets[num].name));
  }

  arrowLeft.addEventListener('click', moveLeft);
  arrowRight.addEventListener('click', moveRight);

}

friendsWrapperMain.addEventListener('animationend', carousel);


//pets slider


