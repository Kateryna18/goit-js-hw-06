// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), 
// підставляє його поточне значення в span#name-output. Якщо інпут порожній, 
// у спані повинен відображатися рядок "Anonymous".

const textInput = document.querySelector('#name-input');
const spanRef = document.querySelector('#name-output');

const spanTextContent = spanRef.textContent;


textInput.addEventListener('input', (event) => {
    spanRef.textContent = event.currentTarget.value;

    if (event.currentTarget.value === '') {
        return spanRef.textContent = spanTextContent
    }
})

