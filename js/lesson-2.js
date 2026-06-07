// Створіть масив styles з елементами 'jazz' і 'blues'
// Додайте до кінця масиву елемент 'rock-n-roll' за допомогою відповідного методу масивів
// Знайдіть елемент 'blues' у масиві та замініть його на 'classic', використовуючи JavaScript-код

// Напишіть функцію logItems(array), яка приймає масив як аргумент
// і виводить у консоль кожен його елемент у форматі:
// "<номер елемента> - <значення елемента>".
// Використайте цикл for для перебору елементів масиву.
// Нумерація елементів повинна починатися з 1 (а не з 0).
// const styles = ["jazz", "blues"];
// styles.push("rock-n-roll");
// styles[1] = "classic";

// function logItems(array) {
//   for (let i = 0; i < array.length; i += 1) {
//     console.log(`${i + 1} - ${array[i]}`);
//   }
// }

// logItems(styles);

// Task 2
// Напишіть функцію checkLogin(array), яка:
// Приймає масив логінів як аргумент.
// Запитує ім'я користувача через prompt.
// Перевіряє, чи є введене ім'я у переданому масиві.
// Якщо ім'я є в масиві – виводить повідомлення через alert: "Welcome, <name>!"
// Якщо ім'я відсутнє – виводить повідомлення: "User not found".

// function checkLogin(array) {
//   const userLogin = prompt("Введіть Ваш логін");
//   if (array.includes(userLogin)) {
//     alert(`Welcome, ${userLogin}!`);
//   } else {
//     alert("User not found");
//   }
// }

// const logins = ["Peter", "John", "Igor", "Sasha"];
// checkLogin(logins);

// task 3
// Напишіть функцію caclculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.

// function caclculateAverage() {
//   let sum = 0;
//   let counter = 0;
//   for (const number of arguments) {
//     if (typeof number === "number") {
//       sum += number;
//       counter += 1;
//     }
//   }
//   return counter !== 0 ? sum / counter : 0;
// }
// console.log(
//   caclculateAverage(1, "Peter", true, [1, 2], { name: "Peter" }, null, 10, 13),
// );

// task 4
// Напишіть функцію, яка сумуватиме сусідні числа
// і пушитиме їх в новий масив.

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// уточнення: складати необхідно перше число з другим, потім друге - з третім,
// третє - з четвертим і так до кінця.
// В результаті функція має повертати масив [33, 45, 39, 17, 25, 27, 29].
// function sumAdjacentNumbers(array) {
//   const result = [];

//   for (let i = 0; i < array.length - 1; i += 1) {
//     result.push(array[i] + array[i + 1]);
//   }
//   return result;
// }

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];
// console.log(sumAdjacentNumbers(someArr));

// task 5
// Напишіть функцію findSmallestNumber(numbers),
// яка шукає найменше число в масиві.
// Додайте перевірку, що функція отримує саме масив, і
// якщо функція отримує масив - поверніть з функції найменше число,
// в іншому випадку - поверніть 'Sory, it is not an array!'.

// const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];

// function findSmallestNumber(numbers) {
//   if (!Array.isArray(numbers)) {
//     return 'Sory, it is not an array!';
//   }
//   let smallest = numbers[0];
//   for (const number of numbers) {
//     if (number < smallest) {
//       smallest = number;
//     }
//   }
//   return smallest;
// }

// const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];
// console.log(findSmallestNumber(numbers)); // Выведет: 2

// // 2. Проверяем случай, когда передали строку вместо массива
// console.log(findSmallestNumber('not an array')); // Выведет: 'Sory, it is not an array!'

// // 3. Проверяем случай, когда передали число
// console.log(findSmallestNumber(42)); // Выведет: 'Sory, it is not an array!'

// TASK 6
// Напишіть функцію findLongestWord(string), яка
// приймає довільний рядок, що складається лише зі слів, розділених
// пробілами (параметр string), і повертатиме найдовше слово у реченні.

// Скористайтесь цим прикладом виклику функції для перевірки її роботи:

// function findLongestWord(string) {
//   const newArr = string.split(" ");
//   let longestWord = newArr[0];
//   for (const word of newArr) {
//     if (longestWord.length < word.length) {
//       longestWord = word;
//     }
//   }
//   return longestWord;
// }

// console.log(findLongestWord("London is the capital of Great Britain")); // 'capital'

// TASK 7
// Напишіть скрипт, який для об'єкту user, послідовно:
// 1 - додасть поле mood зі значенням 'happy',
// 2 - замінить hobby на 'skydiving',
// 3 - замінить значення premium на false,
// 4 - виведе зміст об'єкта user у форматі
// '<ключ>:<значення>' використовуя Object.keys() та for...of

// const user = {
//   name: "John",
//   age: 20,
//   hobby: "tenis",
//   premium: true,
// };
// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;

// for (const key in user) {
//   console.log(`${key}:${user[key]}`);
// }
// const keys = Object.keys(user);
// for (const key of keys) {
//   console.log(`${key}:${user[key]}`);
// }

// TASK 8
// Є об'єкт, в якому зберігаються зарплати команди
// Напишіть код для додавання усіх зарплат та
// збережіть його результат в змінній sum.
// Якщо об'єкт salaries пустий, то результат має бути 0

// const salaries = {
//   Mango: 100,
//   Poly: 160,
//   Ajax: 1470,
// };
// let sum = 0;
// const values = Object.values(salaries);

// for (const value of values) {
//   sum += value;
// }
// console.log(sum);

// task 9
// Створіть об'єкт calculator з наступними методами:
// read(a, b) - приймає два аргумента і зберігає їх як властивості об'єкта,
// sum() - повертає сумму збереженних значень (з перевіркою на наявність властивостей в об'єкті),
// mult() - перемножає збереженні значення і повертає результат (з перевіркою на наявність властивостей в об'єкті),
// винесіть перевірку на наявність властивостей в об'єкті в окремий метод exist().

// Якщо вказані властивості в обʼєкті відсутні (тобто метод exist повертає false),
// методи sum і mult мають повертати рядок 'No such propeties'

// const calculator = {
//   read(a, b) {
//     this.value1 = a;
//     this.value2 = b;
//   },
//   sum() {
//     if (this.exist()) {
//       return this.value1 + this.value2;
//     } else {
//       return `No such propeties`;
//     }
//   },
//   mult() {
//     if (this.exist()) {
//       return this.value1 * this.value2;
//     } else {
//       return `No such propeties`;
//     }
//   },
//   exist() {
//     if (!this.value1 || !this.value2) {
//       return false;
//     } else {
//       return true;
//     }
//   },
// };

// calculator.read(3, 4);
// console.log(calculator.mult());
// console.log(calculator.sum());

// TASK 10
// Напишіть функцію calcTotalPrice(fruits, fruitName),
// яка приймає массив об'єктів (fruits) і рядок з назвою фрукта (fruitName).
// Функція рахує і повертає загальну вартість фрукта
// з таким ім'ям, ціною та кількістю з об'єкта.

// Зверніть увагу, що в масиві може бути кілька обʼєктів з однаковою
// назвою фрукта, це також треба урахувати.

// const fruits = [
//   { name: "Яблуко", price: 45, quantity: 7 },
//   { name: "Апельсин", price: 60, quantity: 4 },
//   { name: "Банан", price: 125, quantity: 8 },
//   { name: "Груша", price: 350, quantity: 2 },
//   { name: "Виноград", price: 440, quantity: 3 },
//   { name: "Банан", price: 125, quantity: 3 },
// ];

// function calcTotalPrice(fruits, fruitName) {
//   let sum = 0;
//   for (const fruit of fruits) {
//     if (fruit.name === fruitName) {
//       sum += fruit.price * fruit.quantity;
//     }
//   }
//   return sum;
// }

// console.log(calcTotalPrice(fruits, "Банан"));

// Додатково, якщо все зробили або хочеться ще, можна дати цю задачу:
// Створіть телефонну книгу - об'єкт phonebook,
// у якого є властивість contacts (список контактів)
// та методи управління книгою:
// add(data) - приймає об'єкт data, де зберігається
// name, email, category, id, createdAt
// (name i email - обов'язкові параметри, які треба передавати
// при додаванні нового контакта,
// category - може передаватись чи ні, якщо ні - має
// приймати значення "default",
// id та createdAt генеруються відповідними методами:
// generateId() і getDate());
// *не забудь додати перевірку, якщо контакт з таким ім'ям чи імейлом вже є - ми його не додаємо
// list() - виводить список контактів у вигляді таблиці;
// filtered(category) - фільтрує контактів по обраній категорії (друзі, робота і т.д.)
// delete(name) - видаляє контакт з заданим ім'ям;
// updateName(oldName, newName) - зиінює ім'я контакта;

const phonebook = {
  contacts: [],

  add(data) {
    const contact = {
      category: "default",
      ...data,
      id: this.generateId(),
      createdAt: this.getDate(),
    };
    this.contacts.push(contact);
  },

  list() {
    console.table(this.contacts);
  },

  filtered(category) {
    const result = [];
    for (const contact of this.contacts) {
      if (contact.category === category) {
        result.push(contact);
      }
    }
    return result;
  },

  delete(name) {},
  updateName(oldName, newName) {},

  generateId() {
    return "#" + Math.random().toString(36).substr(2, 9);
  },
  getDate() {
    return Date.now();
  },
};

phonebook.add({
  name: "Mango",
  email: "mango@mail.com",
  category: "friends",
});

phonebook.add({
  name: "Poly",
  email: "poly@hotmail.com",
});
phonebook.add({
  name: "Katy",
  email: "katy@hotmail.com",
  category: "friends",
});
// phonebook.delete("Mango");
// phonebook.updateName("Poly", "Sara");
console.log(phonebook.filtered("friends"));
phonebook.list();
