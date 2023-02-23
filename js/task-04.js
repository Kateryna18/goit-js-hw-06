// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.
const value = document.querySelector("#value");

let counterValue = 0;



const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');


btnIncrement.addEventListener('click', () => {
    counterValue += 1;
    value.textContent = counterValue;
});




btnDecrement.addEventListener('click', () => {
    counterValue -= 1;
    value.textContent = counterValue;
});

