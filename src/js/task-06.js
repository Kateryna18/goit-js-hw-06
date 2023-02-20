// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), 
// перевіряє його вміст щодо правильної кількості введених символів.

// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.


const validationInput = document.querySelector('#validation-input[data-length="6"]')
validationInput.textContent.length
console.log(validationInput.value)

validationInput.addEventListener('blur', (event) => {
    const validationValue = validationInput.dataset.length;

    if (event.currentTarget.value.length === Number(validationValue)) {
        validationInput.classList.add('valid')
        validationInput.classList.remove('invalid')
    } else {
        validationInput.classList.add('invalid')
        validationInput.classList.remove('valid')
    }
        
    
        
})