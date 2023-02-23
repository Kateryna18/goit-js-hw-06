// Напиши скрипт, який змінює кольори фону елемента <body> через 
// інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.
// Для генерування випадкового кольору використовуй функцію getRandomHexColor.


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}



const changeColorBtn = document.querySelector('.change-color');
const valueColor = document.querySelector('.color')

changeColorBtn.addEventListener('click', (event) => {
  
  const body = document.body;
  body.style.backgroundColor = getRandomHexColor();

  return valueColor.textContent = getRandomHexColor();

})
