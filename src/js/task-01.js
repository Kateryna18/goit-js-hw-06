// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль 
// текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

const list = document.querySelectorAll(".item");
console.log(list);
const countItem = list.length;
console.log("Number of categories: ", countItem);


list.forEach(item => {
    const titleEl = item.querySelector("h2")
    const text = titleEl.textContent;

    const itemListEl = item.querySelectorAll("li");
    const countItemList = itemListEl.length;

    console.log("Category:", text,);
    console.log("Elements:", countItemList);

});