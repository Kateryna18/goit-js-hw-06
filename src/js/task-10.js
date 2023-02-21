// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input 
// і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.

// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, 
// скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createlBtn = document.querySelector('button[data-create]');
const destroylBtn = document.querySelector('button[data-destroy]');
const boxRef = document.querySelector('#boxes');
const input = document.querySelector('#controls input');



createlBtn.addEventListener('click', () => {
  // const amount = Number(input.value);
  createBoxes(Number(input.value));
})

// destroylBtn.addEventListener('click', destroyBoxes())

function createBoxes(amount) {
  let createBox = [];
  for (let i = 1; i = amount; i += 1) {
    const divContainer = document.createElement('div');
    createBox.push(divContainer);
    
  }
  return boxRef.append(...createBox)
  // const divContainer = document.createElement('div');
  // boxRef.insertAdjacentHTML("beforebegin", divContainer)
}

// function destroyBoxes() {

// }
