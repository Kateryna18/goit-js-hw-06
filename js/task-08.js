// Напиши скрипт управління формою логіна.
// 1. Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
// 2. Під час відправлення форми сторінка не повинна перезавантажуватися.
// 3. Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
// 4. Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, 
// а значення поля - значенням властивості. Для доступу до елементів форми використовуй властивість elements.
// Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.

const form = document.querySelector('.login-form');
console.log(form)

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const {
        elements: { email, password }
      } = event.currentTarget;

      if(email.value === '' || password.value === '') {
        return alert('Всі поля мають бути заповнені!');
      } 

      const formData = {
        email: email.value,
        password: password.value
    };

    console.log(formData);

    form.reset();
}) 
