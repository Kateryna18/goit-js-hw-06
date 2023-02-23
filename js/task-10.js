// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input 
// і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.

// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, 
// скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.


const input = document.querySelector('#controls input');
const createlBtn = document.querySelector('button[data-create]');
const destroylBtn = document.querySelector('button[data-destroy]');
const boxesRef = document.querySelector('#boxes');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {
  let size = 30;
  for (let i = 1; i < amount; i += 1) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();

    boxesRef.append(box);
    size += 10;
    
  }
}

function destroyBoxes() {
  boxesRef.innerHTML= '';
}


createlBtn.addEventListener('click', () => {
  createBoxes(input.value);
})

destroylBtn.addEventListener('click', destroyBoxes);





