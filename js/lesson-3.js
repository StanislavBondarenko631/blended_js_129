// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить
// квадрати кожного елементу вхідного масиву.
// Очікуваний результат: [1, 4, 9, 16, 25].

// const numbers = [1, 2, 3, 4, 5];

// const squares = numbers.map((num) => num * num);

// console.log(squares);

//  const powNumbers = (array, value) => array.map ((num) => Math.pow(num, value));
// console.log(powNumbers(numbers1, num));

// Завдання 2
// Дано масив об'єктів. Створіть новий масив, що містить всі значення
// з масивів values кожного об'єкту, збережених в одному масиві.
// Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

// const data = [
//   { id: 1, values: [1, 2, 3] },
//   { id: 2, values: [4, 5, 6] },
//   { id: 3, values: [7, 8, 9] },
// ];

// const result = data.flatMap((item) => item.values);

// console.log(result);

// const result = (array) => array.flatMap((item) => item.values);

// console.log(result(data));

// Завдання 3
// Дано масив об'єктів.
// Перевірте, чи є хоча б один об'єкт з віком менше 20 років.
// Очікуваний результат: true.

// const people = [
//   { name: "John", age: 19 },
//   { name: "Jane", age: 31 },
//   { name: "Bob", age: 25 },
// ];

// const isYangPerson = people.some((person) => person.age < 20);

// console.log(isYangPerson);

// const checkYangPerson = (array, age) =>
//   array.some((person) => {
//     console.log(person);
//     return person.age < age;
//   });

// console.log(checkYangPerson(people, 20));

// Завдання 4
// Дано масив чисел [2, 4, 6, 8, 10].
// Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

// const numbers = [2, 4, 6, 8, 10];

// const isAllEven = numbers.every((num) => num % 2 === 0);

// console.log(isAllEven);

// const checkAllEven = (array, value) =>
//   array.every((item) => item % value === 0);

// console.log(checkAllEven(numbers, 2));

// Завдання 5
// Знайдіть перше непарне число

// const numbers = [2, 1, 6, 8, 9, 10, 12];

// // const firstOddNumber = numbers.find((num) => num % 2 !== 0);

// // console.log(firstOddNumber);

// const firstOddNumber = (array, value) =>
//   array.find((item) => item % value !== 0);
// console.log(firstOddNumber(numbers, 2));

// Завдання 6

// Відсортуйте масив чисел [4, 2, 5, 1, 3]
// у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

// const numbersArray = [4, 2, 5, 1, 3];

// const ascendingNumbers = numbersArray.toSorted((a, b) => a - b);

// console.log(ascendingNumbers);

// Разбор от ИИ
// Добавив функцию сравнения (a, b) => a - b, вы застраховали свой код от любых ошибок сортировки чисел (даже если бы в массиве были числа 10, 100 или отрицательные значения).
// Если бы в массиве были двузначные числа, например [4, 2, 25, 1, 10]

// const sortArr = (array) => array.toSorted((a, b) => a - b);

// console.log(sortArr(numbersArray));

// Завдання 7

// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"]
//  у порядку алфавіту.
// Очікуваний результат: ["apple", "banana", "orange", "pear"].

// const stringArray = ['banana', 'orange', 'apple', 'pear'];

// const inAlphabetOrder = stringArray.toSorted((a, b) => a.localeCompare(b));

// console.log(inAlphabetOrder);

// const sortedStringArr = (array) => array.toSorted((value1, value2) => value1.localeCompare(value2));

// console.log(sortedStringArr(strinArray));

// Завдання 8

//  Відсортуйте масив об'єктів за віком у порядку зростання.
// Очікуваний результат: [{name: "Bob", age: 19}, {name: "John", age: 27}, {name: "Jane", age: 31}].

// const users = [
//   { name: 'John', age: 27 },
//   { name: 'Jane', age: 31 },
//   { name: 'Bob', age: 19 },
// ];

// const inAscendingAgeOrder = users.toSorted((a, b) => a.age - b.age);

// console.log(inAscendingAgeOrder);

// const sortedArray = (users) => users.toSorted((a, b) => a.age - b.age);
// console.log(sortedArray(user));

// Завдання 9
// Дано масив об'єктів.
// Створіть новий масив, що містить тільки об'єкти, в яких
// вік більше 20 років.
// Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]

// const users = [
//   { name: "John", age: 27 },
//   { name: "Jane", age: 31 },
//   { name: "Bob", age: 19 },
// ];

// const filteredUser = users.filter((user) => user.age > 20);

// console.log(filteredUser);

// const filteredUser = (array, age) => array.filter((user) => user.age > age);

// console.log(filteredUser(users, 20));

// Завдання 10
// Дано масив чисел [1, 2, 3, 4, 5].
// Застосуйте метод для обчислення суми елементів масиву.

// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce((icc, number) => {
//   return (icc += number);
// }, 0);

// console.log(sum);

// Завдання 11
// Розроби клас Calculator, який дозволяє виконувати арифметичні
//  операції над числом за допомогою методів класу, підтримуючи
// ланцюжковий виклик (method chaining).
//
// Вимоги до класу Calculator
// - Метод number(value)
// Встановлює початкове значення для наступних обчислень.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
// - метод getResult, Повертає поточний результат усіх операцій.
// Не змінює значення, просто повертає його.
// - метод add - Додає value до поточного значення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
// - метод subtract - Віднімає value від поточного значення. Повертає this.
// - метод divide - Ділить поточне значення на value, якщо value не дорівнює 0.
// Якщо value === 0, викидає помилку з повідомленням про неможливість ділення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
// - метод multiply -Множить поточне значення на value. Повертає this.
// Об'єкт класу може проводити послідовні операції у вигляді ланцюжка
// Приклад використання:
// const calc = new Calculator();

// const result = calc
//   .number(10)   // Встановлюємо початкове значення 10
//   .add(5)       // Додаємо 5 (10 + 5 = 15)
//   .subtract(3)  // Віднімаємо 3 (15 - 3 = 12)
//   .multiply(4)  // Множимо на 4 (12 * 4 = 48)
//   .divide(2)    // Ділимо на 2 (48 / 2 = 24)
//   .getResult(); // Отримуємо результат: 24

//   console.log(result); // 24

// class Calculator {
//   #result;
//   number(value) {
//     this.#result = value;
//     return this;
//   }

//   getResult() {
//     return this.#result;
//   }

//   add(value) {
//     this.#result += value;
//     return this;
//   }

//   subtract(value) {
//     this.#result -= value;
//     return this;
//   }

//   divide(value) {
//     if (value === 0) {
//       throw new Error('Error');
//     }
//     this.#result /= value;

//     return this;
//   }

//   multiply(value) {
//     this.#result *= value;
//     return this;
//   }
// }

// const calc = new Calculator();
// const result = calc
//   .number(10) // Встановлюємо початкове значення 10
//   .add(5) // Додаємо 5 (10 + 5 = 15)
//   .subtract(3) // Віднімаємо 3 (15 - 3 = 12)
//   .multiply(4) // Множимо на 4 (12 * 4 = 48)
//   .divide(2) // Ділимо на 2 (48 / 2 = 24)
//   .getResult(); // Отримуємо результат: 24

// console.log(result); // 24

// Завданеня 12
// Напиши клас Client який створює об'єкт з властивостями login email.
// Оголоси приватні властивості #login #email, доступ до яких зроби
// через геттер та сеттер login email

// class Client {
//   #login;
//   #email;

//   constructor(login, email) {
//     this.#login = login;
//     this.#email = email;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }

//   get login() {
//     return this.#login;
//   }

//   set login(newLogin) {
//     this.#login = newLogin;
//   }
// }

// const client = new Client('mango_user', 'mango@mail.com');

// console.log(client.login); // "mango_user"
// console.log(client.email); // "mango@mail.com"

// client.login = 'poly_super';
// client.email = 'poly@mail.com';

// console.log(client.login); // "poly_super"
// console.log(client.email); // "poly@mail.com"

// Завдання 13
//  Наслідування у класах!
// Cтворіть клас `Person`, який містить наступні властивості:
//  - `name` - ім'я людини;
//  - `age`- вік людини;
//  - `gender` - стать людини;
//  - `email`- електронна пошта людини.

// Крім того, клас `Person` має мати метод `getDetails()`,
// який повертає об'єкт з ім'ям, віком, статтю
//та електронною поштою людини.

//
// Потім Створіть клас `Employee`, який розширює клас `Person` і містить наступні властивості:
//  - salary - зарплата співробітника;
//  - department - відділ, в якому працює співробітник.
// Крім того, клас `Employee` має мати метод `getEmployeeDetails()`, який повертає об'єкт з зарплатою співробітника та відділом, в якому він працює.

class Person {
  constructor({ name, age, gender, email }) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.email = email;
  }

  getDetails() {
    // return this;
    return {
      name: this.name,
      age: this.age,
      gender: this.gender,
      email: this.email,
    };
  }
}

class Employee extends Person {
  constructor({ salary, department, ...data }) {
    super(data);
    this.salary = salary;
    this.department = department;
  }

  getEmployeeDetails() {
    return {
      salary: this.salary,
      department: this.department,
    };
  }
}

const data = {
  name: "Stanislav",
  age: 18,
  gender: "male",
  email: "Stas@gmail.com",
  salary: 5000,
  department: "developer",
};
const person = new Person(data);

const emp = new Employee(data);

console.log(person);
console.log(person.getDetails());
console.log(emp.getEmployeeDetails());
console.log(emp.getDetails());

//Підрахунок кількості повторень
//Дано масив:
// const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
// //Завдання: За допомогою reduce підрахуйте, скільки разів кожен фрукт зустрічається в масиві.
// //Очікуваний результат:
// //{
//  // apple: 3,
//  // banana: 2,
//  // orange: 1
// //}
