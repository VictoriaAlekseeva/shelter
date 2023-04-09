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

window.onload = function() {
  console.log('Hello Rolling Scopes!');

  // openModal();
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
    "id": "1",
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
    "id": "2",
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
    "id": "3",
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
    "id": "4",
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
    "id": "5",
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
    "id": "6",
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
    "id": "7",
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
    "id": "8",
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

const getFriendsWrapper = () => {
  const friendsWrapper = document.querySelector('.friends__wrapper') || document.querySelector('.friends-cards__wrapper');
  friendsWrapper.innerHTML = '';
  return friendsWrapper;
};

const renderFriendCard = (num) => {
  let friendsWrapper = getFriendsWrapper();

  for (let i = 0; i < num; i++) {
    let newCard = generateFriendsCard(pets[i].id, pets[i].img, pets[i].name)
    friendsWrapper.append(newCard);
  }
  return friendsWrapper;
}

const renderFriendCardMain = () => {
  if (document.querySelector('.friends__wrapper')) renderFriendCard(3);
}

const renderFriendCardPets = () => {
  if (document.querySelector('.friends-cards__wrapper')) renderFriendCard(8);
}

renderFriendCardMain();
renderFriendCardPets();

//modal window
let ourFriendsWrapper = document.querySelector('.our-friends__wrapper') || document.querySelector('.our-friends-pets__wrapper');

function openModal() {
  let template = `
          <div class="friends-modal__overlay"></div>
          <div class="friends-modal__card">
            <span class = "friends-modal__close-button"></span>
            <img src="./src/img/pets-jennifer.png" alt="Jennifer" class="friends-modal__img">
            <div class="friends-modal__description">
              <h3 class="friends-modal__name">Jennifer</h3>
              <h4 class="friends-modal__type">Dog - Labrador</h4>
              <p class="friends-modal__text">Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.</p>
              <ul class="friends-modal__list">
                <li><span class="text-bold">Age:</span> 2 mounth</li>
                <li><span class="text-bold">Inoculations:</span> none</li>
                <li><span class="text-bold">Diseases:</span> none</li>
                <li><span class="text-bold">Parasites:</span> none</li>
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

let friendsCard = document.querySelectorAll('.friends__card');

friendsCard.forEach((el) => el.addEventListener('click', openModal));


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






