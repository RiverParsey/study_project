"use strict"

// const answers = [];  // создаем переменную массив

// answers[0] = prompt('как ваше имя?', '');  // ответ станет первым элементом массива

// const user = 'Richard';

// console.log(`Hello, ${user}`);

// Lesson : module1-task3
// Первая программка

// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false
// };

// const a = prompt('Один из последних просмотренных фильмов?', ''),
//       b = prompt('На сколько оцените его?', ''),
//       c = prompt('Один из последних просмотренных фильмов?', ''),
//       d = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB.movies['logan']);

// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false
// };

// const a = prompt('Один из просмотренных фильмов?', ''),
//       b = prompt('На сколько оцените его?', ''),
//       c = prompt('Один из просмотренных фильмов?', ''),
//       d = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);
// Next lesson : module1-task4
// Условия



// if (1) {
//   console.log('Ok!');
// } else {
//   console.log('Error');
// }

// const num = 50;

// if (num > 100) {
//   console.log('Ok!');
// } else {
//   console.log('Error!');
// }

// if (num < 49) {
//   console.log('Error');
// } else if (num > 100) {
//   console.log('Too much');
// } else {
//   console.log('Ok!');
// }

// (num === 50) ? console.log('Ok!') : console.log('Error');

// const num = '50';

// switch (num) {
//   case '49':
//     console.log('Неверно');
//     break;
//   case '100':
//     console.log('Неверно');
//     break;
//   case '50': 
//     console.log('В точку');
//     break;
//   default:
//     console.log('Не в этот раз');
//     break;
// }

// const num = 50;

// switch (num) {
//   case 49:
//     console.log('Неверно');
//     break;
//   case 100:
//     console.log('Неверно');
//     break;
//   case 51:
//     console.log('В точку');
//     break;
//   default:
//     console.log('Не в этот раз');
//     break;
// }


// Next lesson : module1-task5
// Логические операторы

// &&    Логическое И
// ||    Логическое ИлИ
// !     Оператор Не

// const hamburger = 5;
// const fries = 0;

// if (hamburger && fries) {
//   console.log('Я сыт!');
// }

// const hamburger = 3;
// const fries = 1;
// const cola = 1;

// console.log(hamburger === 3 && cola && fries);

// console.log(1 && 0);
// console.log(1 && 5);
// console.log(null && 5);
// console.log(0 && 'yo bitch');

// if (hamburger === 3 && cola === 1 && fries) {
//   console.log('Все сыты!');
// } else {
//   console.log('Мы уходим');
// }

// Оператор И всегда возвращает первое ложное значение если оно есть, дальше него код уже не идет
// Если все аргументы верны то возвращается значение последнего аргумента

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
//   console.log('Все довольны!');
// } else {
//   console.log('Мы уходим');
// }

// console.log(hamburger === 3 && cola === 2 || fries === 3 && nuggets);

// let johnReport, alexReport, samReport, mariaReport = 'done';

// console.log(johnReport || alexReport || samReport || mariaReport);

// console.log(!0);


// Next lesson : module1-task6
// Циклы

// let num = 50;

// while (num <= 55) {
//   console.log(num);
//   num ++;
// }

// do {
//   console.log(num);
//   num ++;
// }
// while (num < 55);

// for (let i = 1; i < 10;  i++) {
//   if(i === 6) {
//     // break;
//     continue;
//   }

//   console.log(i);
// }

// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }


// Next lesson : module1-task7
// Циклы в цикле и метки

// for (let i = 0; i < 3; i++) {
//   console.log(i);
//   for (let j = 0; j < 3; j++) {
//     console.log(j);
//   }
// }

// let result = '';
// let length = 7;

// for (let i = 1; i < length; i++) {

//   for (let j = 0; j < i; j++) {
//     result += '*';
//   }

//   result += '\n';
// }

// console.log(result);

// *
// **
// ***
// ****
// *****
// ******

// let result = '';
// const length = 7;

// for (let i = 1; i < length; i++) {

//   for (let j = 0; j < i;  j++) {
//     result += "*";
//   }

//   result += '\n';
// }

// console.log(result);

// first: for (let i = 0; i < 3; i++) {
//   console.log(`First level: ${i}`);
//   for (let j = 0; j < 3; j++) {
//     console.log(`Second level: ${j}`);
//     for (let k = 0; k < 3; k++) {
//       if (k === 2) break first;
//       console.log(`Third level: ${k}`);
//     }
//   }
// }

// first: for (let i = 0; i < 3; i++) {
//   console.log(`First level: ${i}`);
//   for (let j = 0; j < 3; j++) {
//     console.log(`Second level: ${j}`);
//     for (let k = 0; k < 5; k++) {
//       if (k === 2) break first;
//       console.log(`Third level: ${k}`);
//     }
//   }
// }




// for (let i = 5; i <= 180; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }


// let i = 5;

// while (i <= 180) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
//   i++;
// }

// // from 2 to 10

// for (i = 2; i <=10; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// // change for to while

// for (i = 0; i < 3; i++) {
//   console.log(`number ${i}`);
// }

//     //////

// let i = 0;

// while (i < 3) {
//   console.log(`number ${i}`);
//   i++;
// }

// for (i = 2; i < 10; i++) {
//   if (i % 2 === 1) {
//     console.log(i);
//   }
// }

// for (i = 5; i <= 10; i++) {
//   console.log(i);
// }

// for (i = 20; i >= 10; i--) {
//   console.log(i);
// }

// for (i = 2; i <= 10; i++) {
//   if (i % 2 === 0) {
//       console.log(i);
//   }
// }

// for (let i = 2; i <= 16; i++) {
//   if (i % 2 === 0) {
//       continue;
//   } else {
//       console.log(i);
//   }
// }


// Next lesson : module1-task8
// Применяем условия и циклы

// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false
// };


// for (let i = 0; i < 2; i++) {
//   const a = prompt('Один из последних просмотренных фильмов?', ''),
//         b = prompt('На сколько оцените его?', '');

//   if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//     personalMovieDB.movies[a] = b;
//     console.log('done');
//   } else {
//     console.log('error');
//     i--;
//   }
// }

// if (personalMovieDB.count < 10) {
//   console.log('просмотрено довольно мало фильмов')
// }

// console.log(personalMovieDB);

// for (let i = 0; i < 2; i++) {
//   const a = prompt('Один из последних просмотренных фильмов?', ''),
//         b = prompt('На сколько оцените его?', '');

//   if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//     personalMovieDB[a] = b;
//     console.log('done');
//   } else {
//     console.log('error');
//     i--;
//   }

//   personalMovieDB.movies[a] = b;
// }

// if (personalMovieDB.count < 10) {
//   console.log('просмотрено довольно мало фильмов');
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//   console.log('вы классический зритель');
// } else if (personalMovieDB.count >= 30) {
//   console.log('вы киноман');
// } else {
//   console.log('произошла ошибка')
// }

// console.log(personalMovieDB);



// for (i = 0; i <= 100; i++) {
//   console.log(i);
// }

// for (i = 100; i >= 0; i--) {
//   console.log(i);
// }

// for (i = 100; i >= 0; i--) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// // Задача. Выведите столбец чисел от 1 до 50

// let i = 1;

// while (i <= 50) {
//   console.log(i);
//   i++;
// }

// for (i = 1; i <= 50; i++) {
//   console.log(i);
// }

// // Задача. Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти элементы на экран.

// let arr = [1, 2, 3, 4, 5];

// for (i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }


// Next lesson : module1-task9
// функции и стрелочные функции

// let num = 20;

// function showFirstMessage(text) {
//   console.log(text);
//   let num = 10;
//   console.log(num);
// }

// showFirstMessage("hello world");
// console.log(num);

// function calc(a, b) {
//   return (a + b);
// }

// console.log(calc(4 , 3));
// console.log(calc(7 , 3));
// console.log(calc(2 , 9));

// function ret() {
//   let num = 50;

//   // какой то код

//   return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);

// const logger = function() {
//   console.log("Hello");
// };

// logger();

// const calc = (a , b) => {
//   console.log('1');
//   return a + b;
// };


// Next lesson : module1-task10
// Еще раз про аргументы и функции

// const usdCurr = 28;
// const eurCurr = 32;

// function convert(amount) {
//   console.log(usdCurr * amount);
// }

// convert(500);

// Неверно

// function convert(amount, curr) {
//   console.log(curr * amount);
// }

// convert(500, usdCurr);
// convert(500, eurCurr);

// Верно, универсальная функция

// Next lesson : module1-task11
// Методы и свойства строк и чисел

// const str = 'test';
// const arr = [1, 2, 3];

// console.log(arr.length);

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// const fruit = 'Some fruit';

// console.log(fruit.indexOf('fruit'));

// const logg = 'Hello world';

// console.log(logg.slice(6, 10));
// console.log(logg.slice(6));
// console.log(logg.slice(-5, -1));

// console.log(logg.substring(6, 11)); // не поддерживает отрицательное значение

// const num = 12.2;
// console.log(Math.round(num));

// const test = "12.2px";
// console.log(parseInt(test));
// console.log(parseFloat(test));


// Next lesson : module1-task12
// Практика: используем функции

// let numberOfFilms;

// function start() {
//   numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

//   while (numberOfFilms == '' || numberOfFilms == null || isNan(numberOfFilms)) {
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//   }
// }

// start();

// function rememberMyFilms() {
//   for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов?', '');
//           b = prompt('На сколько вы оцените его?', '');

//     if (a !== null && b !== null && a != '' && b != '' && a.length < 50) {
//       console.log('done');
//     } else {
//       console.log('error');
//       i--;
//     }
//   }
// }

// rememberMyFilms();

// function detectPersonalLevel() {
//   if (personalMovieDB.count < 10) {
//     console.log('Просмотрено довольно мало фильмов');
//   } else if (personalMovieDB >= 10 && personalMovieDB < 30) {
//     console.log('Вы классический зритель');
//   } else if (personalMovieDB >= 30) {
//     console.log('Вы киноман');
//   } else {
//     console.log('Произошла ошибка');
//   }
// }

// detectPersonalLevel();

// function showMyDB(hidden) {
//   if (!hidden) {
//     console.log(personalMovieDB);
//   }
// }

// showMyDB(personalMovieDB.privat);

// function writeYourGenres() {
//   for (let i = 1; i <= 3; i++) {
//     const genres = prompt(`Ваш любимый жанр под номером ${i}`);
//     personalMovieDB.genres[i - 1] = genre;
//   }
// }

// writeYourGenres();


// Next lesson : module1-task13
// метод trim()

// function rememberMyFilms() {
//   for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов?', '').trim();
//           b = prompt('На сколько вы оцените его?', '');

//     if (a !== null && b !== null && a != '' && b != '' && a.length < 50) {
//       console.log('done');
//     } else {
//       console.log('error');
//       i--;
//     }
//   }
// }

// rememberMyFilms();


// Next lesson : module1-task14
// Callback функции

// function first() {
//   // do something

//   setTimeout(function() {
//     console.log(1);
//   }, 500);
// }

// function second() {
//   console.log(2);
// }

// first();
// second();

// function learnJS(lang, callback) {
//   console.log(`Я учу: ${lang}`);
//   callback();
// }

// function done() {
//   console.log('Я прошел этот урок!');
// }

// learnJS('Javascript', done);


// Next lesson : module1-task15
// Объекты, деструктуризация объектов

// const options = {
//   name: 'test',
//   width: 1024,
//   height: 1024,
//   colors: {
//     border: 'black',
//     bg: 'red'
//   }
// };

// for (let key in options) {
//   if (typeof(options[key]) === 'object') {
//     for (let i in options[key]) {
//       console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//     }
//   } else {
//       console.log(`Свойство ${key} имеет значение ${options[key]}`);
//   }
// }


// Next lesson : module1-task16
// Массивы и псевдомассивы

// const arr = [1, 2, 3, 6, 8];

// // arr[99] = 0;
// // console.log(arr.length);
// // console.log(arr);

// arr.forEach(function(item, i, arr) {  // первый аргумень. элементы перебора, называть как угодно
//   console.log(`${i}: ${item} внутри массива ${arr}`);                      // второй: номер по порядку переменная i
// });                                       // третий аргумень: ссылка на массив который необходимо перебрать


// arr.pop();
// arr.push(10);

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }  

// for (let value of arr) {
//   console.log(value);
// }

// Next lesson: module1-task17
// Forgot how to use github, but its already done

// Next lesson: module1-task18
// Testing my github memory

// Next lesson: module1-task19

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// Next lesson: module1-task20

// for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = prompt('На сколько оцените его?', '');
  
//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//       personalMovieDB.movies[a] = b;
//       console.log('done');
//     } else {
//       console.log('error');
//       i--;
//     }
//   }

  // for (let i = 0; i < 2; i++) {
  //   const a = prompt('Один из последних просмотренных фильмов?', ''),
  //         b = prompt('На сколько оцените его?', '');
  
  //   if (a != null && b != null && a != '' && b != '' && a.length < 50) {
  //     personalMovieDB.movies[a] = b;
  //     console.log('done');
  //   } else {
  //     console.log('error');
  //     i--;
  //   }
  // }

//  module1-task24 callback function

// function first() {
//   // do something
//   setTimeout(function() {
//     console.log(1);
//   }, 500);
// }

// function second() {
//   console.log(2);
// }

// first();
// second();

// function learnJS(lang, callback) {
//   console.log(`Я учу: ${lang}`);
//   callback();
// }

// function done() {
//   console.log('Я прошел этот урок!');
// }

// learnJS('JavaScript', done);

// learnJS('JavaScript', function() {
//   console.log('Я прошел этот урок!');
// });

// module1-task25 обьекты, деструктуризация

// const options = {
//   name: 'test',
//   width: 1024,
//   height: 1024,
//   colors: {
//     border: 'black',
//     bg: 'red'
//   },
//   makeTest: function() {
//     console.log('Test');
//   }
// };

// options.makeTest();

// console.log(options['colors']['border']);

// delete options.name;

// console.log(options);

// let counter = 0;

// for (let key in options) {
//   if (typeof(options[key]) === 'object') {
//     for (let i in options[key]) {
//       console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//     }
//   }
//   else {
//     console.log(`Свойство ${key} имеет значение ${options[key]}`);
//     counter++;
//   }
// }
// console.log(counter);

// console.log(Object.keys(options).length);

// const fuckoff = {
//   name: 'jack',
//   width: 252,
//   height: 2523,
//   colors: {
//     border: 'red',
//     bg: 'blue'
//   }
// };

// for (let key in fuckoff) {
//   if (typeof(fuckoff[key]) === 'object') {
//     for (let i in fuckoff[key]) {
//       console.log(`${i} имеет значение ${fuckoff[key][i]}`);
//     }
//   } else {
//     console.log(`${key} имеет значение ${fuckoff[key]}`);
//   }
// }

// const options = {
//   name: 'test',
//   width: 252,
//   height: 252,
//   colors: {
//     border: 'black',
//     bg: 'red'
//   },
//   makeTest: function() {
//     console.log('Test');
//   }
// };

// options.makeTest();

// const {border, bg} = options.colors;
// console.log(border);
// console.log(bg);


// module1-task26 массивы и псевдомассивы

// const arr = [1, 12, 43, 6, 38];
// arr.sort(compareNum);
// console.log(arr);

// function compareNum(a, b) {
//   return a - b;
// }

// arr[99] = 0;

// console.log(arr.length);

// console.log(arr);

// arr.forEach(function(item, i, arr) {
//   console.log(`${i}: ${item} внутри массива ${arr}`)
// });

// arr.pop();
// arr.push(10);

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// for (let value of arr) {
//   console.log(value);
// }

// const str = prompt('', '');
// const products = str.split(', ');
// products.sort();
// console.log(products.join('; '));


// module1-task27 алгоритмы в целом и в JS


// В прошлом уроке мы затронули такую обширную тему в программировании, как алгоритмы. Обычно её изучают в университетах на специальностях по разработке. Но не спешите расстраиваться.

// Если вы дошли уже сюда, то знаете, зачем вы учите JS и что потом хотите делать. В университете же, это обычно изучается и очень быстро забывается под весом всей другой информации и непонимания, зачем это вообще студенту нужно будет потом. Так что на этом этапе все равны.

// Да и будем говорить честно, на фронтенде алгоритмы используются намного-намного реже, чем в других ЯП. Это из-за специфики того, что чаще мы работаем с элементами на страницах, чем с данными. Но хотя бы базовое понимание алгоритмов в будущем приобрести стоит. Есть две причины:

// Собеседования. Да, на них могут спросить алгоритмы. Далеко не всегда и везде. Но чем больше компания и чем сложнее должность - тем выше шанс.

// Работа. Вы все равно, в один момент придете к тому, что нужно и хочется код сделать быстрее и оптимизированее. Вот здесь и могут помочь алгоритмы.

// Что я вам посоветую:

// На досуге почитать книгу "Грокаем алгоритмы". Максимально простым и понятным языком все объясняется, даже с картинками. Примеры там на Python, но выглядит все один в один с JS.
// Не пропускайте тему с О-большим - это важно.

// Примеры из этой книги написать самостоятельно на JS и потренироваться с этим кодом.

// Сохранить эту ссылку в закладках и выучить темы отсюда перед собеседованием. Обратите внимание на меню справа, там весь раздел "Алгоритмы JavaScript"

// Этого для начала будет достаточно. С годами опыта вы поймете, что иногда их знать нужно. Особенно для разработки сложного кода. И вот тогда вы уже сможете перейти на более "тяжелую" литературу 🙂

// P.S. А если у вас уже есть за плечами универ/опыт в других языках или алгоритмах - то почитайте хотя бы ссылку из третьего пункта.


// module1-task28 передача по ссылке или по оператору

// let a = 5,
//   b = a;

// b = b + 5;

// console.log(b);
// console.log(a);

// const obj = {
//   a: 5,
//   b: 1
// };

// const copy = obj; //link

// copy.a = 10;

// console.log(copy);
// console.log(obj);

// function copy(mainObj) {
//   let objCopy = {};

//   let key;
//   for (key in mainObj) {
//     objCopy[key] = mainObj[key];
//   }

//   return objCopy;
// }

// const numbers = {
//   a: 2,
//   b: 5,
//   c: {
//     x: 7,
//     y: 4
//   }
// };

// const newNumbers = copy(numbers);

// newNumbers.a = 10;
// newNumbers.c.x = 10;

// console.log(newNumbers);
// console.log(numbers);

// const add = {
//   d: 17,
//   e: 20
// };

// const clone = Object.assign({}, add);

// clone.d = 20;

// console.log(add);
// console.log(clone);

// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice();

// newArray[1] = 'afhae';
// console.log(newArray);
// console.log(oldArray);

// const video = ['youtube', 'vimeo', 'rutube'],
//       blogs = ['wordpress', 'livejournal', 'blogger'],
//       internet = [...video, ...blogs, 'vk', 'facebook'];

// console.log(internet);

// function log(a, b, c) {
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }

// const num = [2, 5, 7];

// log(...num);

// const array = ['a', 'b'];

// const newAarray = [...array];

// const q = {
//   one: 1,
//   two: 2
// };

// const newObj = {...q};


// module1-task29 основы ООП, прототипно-ориентированное программирование

// let str = 'some';
// let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

// console.dir([1, 2, 3]);

// const soldier = {
//   health: 400,
//   armor: 100,
//   sayHello: function() {
//     console.log('Hello');
//   }
// };

// const jonh = Object.create(soldier);

// const jonh = {
//   health: 100
// };

// jonh.__proto__ = soldier;

// Object.setPrototypeOf(jonh, soldier);

// console.log(jonh.armor);
// jonh.sayHello();

// module1-task30   используем обьекты



// function rememberMyFilms() {
//     for (let i = 0; i < 2; i++) {
//       const a = prompt('Один из последних просмотренных фильмов?', '');
//             b = prompt('На сколько вы оцените его?', '');
  
//       if (a !== null && b !== null && a != '' && b != '' && a.length < 50) {
//         console.log('done');
//       } else {
//         console.log('error');
//         i--;
//       }
//     }
//   }
  
  // rememberMyFilms();
  
  
  // const personalMovieDB = {
  //   count: 5,
  //   movies: {
  //     "Inception": 9,
  //     "The Shawshank Redemption": 10,
  //     "The Dark Knight": 8,
  //     "Pulp Fiction": 7,
  //     "Forrest Gump": 9
  //   },
  //   actors: {
  //     "Leonardo DiCaprio": "Cobb",
  //     "Tim Robbins": "Andy Dufresne",
  //     "Christian Bale": "Bruce Wayne",
  //     "John Travolta": "Vincent Vega",
  //     "Tom Hanks": "Forrest Gump"
  //   },
  //   genres: ["Sci-Fi", "Drama", "Action", "Crime", "Romance"],
  //   privat: false,

  //   toggleVisibilityDb: function() {
  //     this.privat = !this.privat;
  //   }

  // };

  // personalMovieDB.toggleVisibilityDb();


  // function showMyDB(hidden) {
  //   if (!hidden) {
  //     console.log(personalMovieDB);
  //   } else {
  //     console.log('Access denied, base is privat');
  //   }
  // }
  
  // showMyDB(personalMovieDB.privat);
  
  // // personalMovieDB.toggleVisibilityDb();
  // showMyDB(personalMovieDB.privat);


  // for (let i = 0; i < 2; i++) {
  //       const a = prompt('Один из последних просмотренных фильмов?', ''),
  //             b = prompt('На сколько оцените его?', '');
      
  //       if (a != null && b != null && a != '' && b != '' && a.length < 50) {
  //         personalMovieDB.movies[a] = b;
  //         console.log('done');
  //       } else {
  //         console.log('error');
  //         i--;
  //       }
  //     }
    
  //     for (let i = 0; i < 2; i++) {
  //       const a = prompt('Один из последних просмотренных фильмов?', ''),
  //             b = prompt('На сколько оцените его?', '');
      
  //       if (a != null && b != null && a != '' && b != '' && a.length < 50) {
  //         personalMovieDB.movies[a] = b;
  //         console.log('done');
  //       } else {
  //         console.log('error');
  //         i--;
  //       }
  //     }

// module1-task31

// const str = 'teSt';

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str);

// const fruit = 'Some fruit';

// console.log(fruit.indexOf('q'));

// const logg = 'Hello world';

// console.log(logg.substr()); // устаревшая

// console.log(logg.substring(6, 10));

// console.log(logg.slice(-5, -1));

// const stR = 'Darova Bratan';

// console.log(stR.slice(0, 7));

// const num = 12.2;
// console.log(Math.round(num));

// const test = '12.2px';
// console.log(parseInt(test));
// console.log(parseFloat(test));



// let numberOfFilms;

// function start() {
//   numberOfFilms = +prompt('How many movies do you watch?', '');

//   while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//     numberOfFilms = +prompt('How many movies do you watch?', '');
//   }
// }

// start();

// const personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false
// };

// function rememberMyFilms() {
//   for (let i = 0; i < 2; i++) {
//     const a = prompt('One of latest seen movies?', ''),
//           b = prompt('How you like them?', '');
  
//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//       personalMovieDB.movies[a] = b;
//       console.log('done');
//     } else {
//       console.log('error');
//       i--;
//     }
//   }
// }

// rememberMyFilms();

// function detectPersonalLevel() {
//   if (personalMovieDB.count < 10) {
//     console.log('Просмотрено довольно мало фильмов');
//   } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     console.log('Вы классический зритель');
//   } else if (personalMovieDB.count >= 30) {
//     console.log('Вы киноман');
//   } else {
//     console.log('Произошла ошибка');
//   }
// }

// detectPersonalLevel();

// function showMyDB(hidden) {
//   if (!hidden) {
//     console.log(personalMovieDB);
//   }
// }

// showMyDB(personalMovieDB.privat);

// function writeYourGenres() {
//   for (let i = 1; i <= 3; i++) {
//     const genre = prompt(`Ваш любимый жано под номером ${i}`);
//     personalMovieDB.genres[i] = genre;
//   }
// }

// writeYourGenres();


// module1-task32


// const personalMovieDB = {
//   count: 0,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: true,
//   start: function() {
//     personalMovieDB.count = +prompt('How many movies do you watch?', '');
  
//     while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
//       personalMovieDB.count = +prompt('How many movies do you watch?', '');
//     }
//   },
//   rememberMyFilms: function() {
//     for (let i = 0; i < 2; i++) {
//       const a = prompt('One of latest seen movies?', ''),
//             b = prompt('How you like them?', '');
    
//       if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//       } else {
//         console.log('error');
//         i--;
//       }
//     }
//   },
//   detectPersonalLevel: function() {
//     if (personalMovieDB.count < 10) {
//       console.log('Просмотрено довольно мало фильмов');
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//       console.log('Вы классический зритель');
//     } else if (personalMovieDB.count >= 30) {
//       console.log('Вы киноман');
//     } else {
//       console.log('Произошла ошибка');
//     }
//   },
//   showMyDB: function(hidden) {
//     if (!hidden) {
//       console.log(personalMovieDB);
//     }
//   },
//   toggleVisibleMyDB: function() {
//     if (personalMovieDB.privat) {
//       personalMovieDB.privat = false;
//     } else {
//       personalMovieDB.privat = true;
//     }
//   },
//   writeYourGenres: function() {
//     for (let i = 1; i <= 3; i++) {
//       const genre = prompt(`Ваш любимый жано под номером ${i}`);

//       if (genre === '' || genre == null) {
//         console.log('Вы ввели некорректные данные');
//         i--;
//       } else {
//         personalMovieDB.genres[i - 1] = genre;
//       }
//     }
//     personalMovieDB.genres.forEach((item, i) => {
//       console.log(`Любимый жанр ${i + 1} - это ${item}`);
//     });
//   },
// };



// module1-task33  отлавливаем ошибки в коде

// lesson 38 отлавливание ошибок в консоле разработчика. Breakpoints



// module1-task34 динамическая типизация в JS

// // to string

// // 1)
// console.log(String(null));
// console.log(typeof(String(4)));

// // 2)
// console.log(typeof(null + ''));

// const num = 5;

// console.log('https://vk.com/catalog/' + num);

// const fontSize = 26 + 'px';

// // to number

// // 1)
// console.log(typeof(Number('4')));

// // 2)
// console.log(typeof(+'5'));

// // 3)
// console.log(typeof(parseInt('15px', 10)));


// let answ = +prompt('Hello', '');

// // to boolean

// // 0, '', null, undefined, NaN;  always false

// // 1)
// let switcher = null;

// if (switcher) {
//   console.log('working...');
// }

// switcher = 1;

// if (switcher) {
//   console.log('working...');
// }

// // 2)
// console.log(typeof(Boolean('4')));

// // 3)
// console.log(typeof(!!'4444'));


// module1-task35  замыкание и лексическое окружение

// let number = 5; debugger

// function logNumber() {
//   console.log(number); debugger
// }

// number = 6;

// logNumber(); debugger

// function createCounter() {
//   let counter = 0;

//   const myFunction = function() {
//     counter = counter + 1;
//     return counter;
//   }

//   return myFunction;
// }

// const increment = createCounter();
// const c1 = increment();
// const c2 = increment();
// const c3 = increment();

// console.log(c1, c2, c3);


// let a = 3
// function addTwo(x) {
//   let ret = x + 2
//   return ret
// }
// let b = addTwo(a)
// console.log(b)

// const user = {
//   name: "John",
//   age: 29
// }

// const {name, age} = user;

// console.log(user);



// module1-task36  задачи с собеседований на понимае основ

// let x = 5; 
// alert(x++);

// [] + false - null + true;
// console.log(typeof([] + false));  // false   string
// console.log(typeof([] + false - null + true));  // NaN


// let y = 1;
// let z = y = 2;
// alert(x);

// [] + 1 + 2;
// console.log([] + 1 + 2);  // '12'

// alert('1'[0]);

// 2 && 1 && null && 0 && undefined;

// console.log(!!(1 && 2) === (1 && 2));

// (null || 2 && 3 || 4);

// let a = [1, 2, 3];
// let b = [1, 2, 3];
// // is a == b?

// alert(+'infinity');

// 'ёжик' > 'яблоко';
// console.log('Ёжик' > 'яблоко');

// 0 || '' || 2 || undefined || true || false;  // return first true, is 2


//  module1-task37  Получение элементов со страницы


// const box = document.getElementById('box');
// console.log(box);

// const btns = document.getElementsByTagName('button');
// console.log(btns[0]);

// const circles = document.getElementsByClassName('circle');
// console.log(circles);

// const hearts = document.querySelectorAll('.heart');
// hearts.forEach(item => {
//   console.log(item);
// });

// const oneHeart = document.querySelector('.heart');
// console.log(oneHeart);

// const btn = document.querySelector('button');
// console.log(btn);


// module1-task38  действия с элементами на странице

// const box = document.getElementById('box'),
//       btns = document.getElementsByTagName('button'),
//       circles = document.getElementsByClassName('circle'),
//       wrapper = document.querySelector('.wrapper'),
//       hearts = wrapper.querySelectorAll('.heart'),
//       oneHeart = wrapper.querySelector('.heart');

// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

// box.style.cssText = 'background-color: blue; width: 500px';

// btns[1].style.borderRadius = '100%';
// circles[0].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++) {
//   hearts[i].style.backgroundColor = 'blue';
// }

// hearts.forEach(item => {
//   item.style.backgroundColor = 'blue';
// });

// const div = document.createElement('div');
// const text = document.createTextNode('i was here');

// div.classList.add('black');

// wrapper.append(div);

// div.innerHTML = '<h1>hello world</h1>';

// div.textContent = 'hello';

// div.insertAdjacentHTML('afterbegin', '<h2>Hello</h2>')
// afterbegin
// afterend
// beforebegin
// beforeend

// wrapper.appendChild(div);

// wrapper.prepend(div);

// hearts[0].before(div);
// hearts[0].after(div);

// wrapper.insertBefore(div, hearts[1]);

// circles[0].remove();
// wrapper.removeChild(hearts[1]);

// hearts[0].replaceWith(circles[0]);
// wrapper.replaceChild(circles[0], hearts[0]);



// module1-task39 задания на обработку событий


/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

// 'use strict';

// const movieDB = {
//     movies: [
//         "Логан",
//         "Лига справедливости",
//         "Ла-ла лэнд",
//         "Одержимость",
//         "Скотт Пилигрим против..."
//     ]
// };

// const adv = document.querySelectorAll('.promo__adv img'),
//       poster = document.querySelector('.promo__bg'),
//       genre = poster.querySelector('.promo__genre'),
//       movieList = document.querySelector('.promo__interactive-list');

// // adv.forEach(item => {
// //     item.remove();
// // });

// adv.forEach(function (item) {
//     item.remove();
// });

// genre.textContent = 'драма';

// poster.style.backgroundImage = 'url("img/bg.jpg")';

// movieList.innerHTML = '';

// movieDB.movies.sort();

// // console.log(poster.innerHTML);

// movieDB.movies.forEach((film, i) => {
//     movieList.innerHTML += `
//         <li class="promo__interactive-item">${i + 1} ${film}
//             <div class="delete"></div>
//         </li>
//     `;
// });



// module1-task40  события и их обработчики


// const btns = document.querySelectorAll('button'),
//       overlay = document.querySelector('.overlay');

// let i = 0;
// const deleteElement = (event) => {
//   console.log(event.currentTarget);
//   console.log(event.type);
//   // i++;
//   // if (i == 1) {
//   //   btn.removeEventListener('click', deleteElement);
//   // }
// }

// btn.onclick = function() {
//   alert('click');
// };

// btn.onclick = function() {
//   alert('second click');
// };

// btns.forEach(btn => {
//   btn.addEventListener('click', deleteElement);
// });

// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);

// btn.addEventListener('click', () => {
//   alert('second click');
// });

// const link = document.querySelector('a');

// link.addEventListener('click', (event) => {
//   event.preventDefault();

//   console.log(event.target);
// });

// const btn = document.querySelector('button');

// btn.onclick = function() { // old version
//   alert('click');
// };

// btn.addEventListener('click', () => {
//   alert('click'); // good version
// });

// let i = 0;
// const deleteElement = (event) => {
//   console.log(event.target);
//   i++;
//   if (i == 1) {
//     btn.removeEventListener('mouseenter', deleteElement);
//   }
// };

// btn.addEventListener('mouseenter', deleteElement);
// btn.removeEventListener('mouseenter', deleteElement);



// module1-task41  навигация по DOM

// console.log(document.body);
// console.log(document.documentElement);
// console.log(document.body.childNodes);
// console.log(document.body.firstChild);
// console.log(document.body.firstElementChild);
// console.log(document.body.lastChild);

// console.log(document.querySelector('#btn').parentNode.parentNode);
// console.log(document.querySelector('#btn').parentElement);

// console.log(document.querySelector('[data-current="3"]').nextElementSibling);
// console.log(document.querySelector('[data-current="3"]').previousElementSibling);

// for (let node of document.body.childNodes) {
//   if (node.nodeName == '#text') {
//     continue;
//   }

//   console.log(node);
// }


// module1-task42 рекурсия

// pow(2, 1) // 2
// pow(2, 2) // 4
// pow(2, 3) // 8
// pow(2, 4) // 16

// function pow(x, n) {
//   let result = 1;

//   for (let i = 0; i < n; i++) {
//     result *= x;
//   }

//   return result;
// }

// function pow(x, n) {
//   if (n === 1) {
//     return x;
//   } else {
//     return x * pow(x, n - 1);
//   }
// }

// console.log(pow(2, 2));

// let students = {
//   js: [{
//     name: 'John',
//     progress: 100
//   }, {
//     name: 'Ivan',
//     progress: 60
//   }],

//   html: {
//     basic: [{
//       name: 'Peter',
//       progress: 20
//     }, {
//       name: 'Ann',
//       progress: 18
//     }],

//     pro: [{
//       name: 'Sam',
//       progress: 10
//     }],
//   }
// };

// function getTotalProgressByIteration(data) {
//   let total = 0;
//   let students = 0;

//   for (let course of Object.values(data)) {
//     if (Array.isArray(course)) {
//       students += course.length;

//       for (let i = 0; i < course.length; i++) {
//         total += course[i].progress;
//       }
//     } else {
//       for (let subCourse of Object.values(course)) {
//         students += subCourse.length;

//         for (let i = 0; i < subCourse.length; i++) {
//           total += subCourse[i].progress;
//         }
//       }
//     }
//   }

//   return total / students;
// }

// // console.log(getTotalProgressByIteration(students));

// function getTotalProgressByRecursion(data) {
//   if (Array.isArray(data)) {
//     let total = 0;

//     for (let i = 0; i < data.length; i++) {
//       total += data[i].progress;
//     }

//     return [total, data.length];
//   } else {
//     let total = [0, 0];

//     for (let subData of Object.values(data)) {
//       const subDataArr = getTotalProgressByRecursion(subData);
//       total[0] += subDataArr[0];
//       total[1] += subDataArr[1];
//     }

//     return total;
//   }
// }

// const result = getTotalProgressByRecursion(students);
// console.log(result[0] / result[1]);


// module1-task43 используем события на странице, практика

// document.addEventListener('DOMContentLoaded', () => {
//   const movieDB = {
//       movies: [
//           "Логан",
//           "Лига справедливости",
//           "Ла-ла лэнд",
//           "Одержимость",
//           "Скотт Пилигрим против..."
//       ]
//   };
  
//   const adv = document.querySelectorAll('.promo__adv img'),
//         poster = document.querySelector('.promo__bg'),
//         genre = poster.querySelector('.promo__genre'),
//         movieList = document.querySelector('.promo__interactive-list'),
//         addForm = document.querySelector('form.add'),
//         addInput = addForm.querySelector('.adding__input'),
//         checkbox = addForm.querySelector('[type="checkbox"]');

//   addForm.addEventListener('submit', (event) => {
//       event.preventDefault();

//       let newFilm = addInput.value;
//       const favorite = checkbox.checked;

//       if (newFilm) {

//           if (newFilm.length > 21) {
//               newFilm = `${newFilm.substring(0, 22)}...`;
//           }

//           movieDB.movies.push(newFilm);
//           sortArr(movieDB.movies);

//           createMovieList(movieDB.movies, movieList);
//       }

//       event.target.reset();
//   });
  
//   const deleteAdv = (arr) => {
//       arr.forEach(item => {
//           item.remove();
//       })
//   };

//   deleteAdv(adv);
  
//   const makeChanges = () => {
//       genre.textContent = 'драма';
  
//       poster.style.backgroundImage = 'url("img/bg.jpg")';
//   };

//   makeChanges();

//   const sortArr = (arr) => {
//       arr.sort();
//   }

//   sortArr(movieDB.movies);
  

//   function createMovieList(films, parent) {
//       parent.innerHTML = '';

//       films.forEach((film, i) => {
//           parent.innerHTML += `
//               <li class="promo__interactive-item">${i + 1} ${film}
//                   <div class="delete"></div>
//               </li>
//           `;
//       });

//       document.querySelectorAll('.delete').forEach((btn, i) => {
//           btn.addEventListener('click', () => {
//               btn.parentElement.remove();
//               movieDB.movies.splice(i, 1);

//               createMovieList(films, parent);
//           })
//       })
//   };

//   createMovieList(movieDB.movies, movieList);

// });


// module1-task44  события на мобильных устройствах

// touchstart
// touchmove
// touchend
// touchenter
// touchleave
// touchcancel

// window.addEventListener('DOMContentLoaded', () => {
//   const box = document.querySelector('.box');

//   box.addEventListener('touchstart', (e) => {
//     e.preventDefault();

//     console.log('start');
//   });

//   box.addEventListener('touchmove', (e) => {
//     e.preventDefault();

//     console.log('move');
//   });

//   box.addEventListener('touchend', (e) => {
//     e.preventDefault();

//     console.log('end');
//   });

// });
// console.log(2 % 13);


// function nextInLine(arr, item) {
//   // Only change code below this line
//   arr.push(item);
//   const removed = arr.shift();
//   return removed;
//   // Only change code above this line
// }

// const arr = [1, 2, 3, 4, 5];

// console.log(nextInLine([1, 3]));


// module1-task46 nullish operator

// const box = document.querySelector('.box');

// const newHeight = 100;
// const newWidth = 400;

// function changeParams(elem, h, w) {
//     elem.style.height = `${h ?? 200}px`;
//     elem.style.width = `${w ?? 200}px`;
//     elem.innerHTML = (h ?? 200) * (w ?? 200);
// }

// changeParams(box, newHeight, newWidth);


// let userName;
// let userKey;

// console.log(userName ?? userKey ?? 'User');


// module1-task46 оператор опциональной цепочки

// const box = document.querySelector('.box');
// const block = document.querySelector('.block');

// console.log(block);

// // if (block) {
// //   console.log(block.textContent);
// // }

// // block?.textContent = '123';

// // console.log(1 + 2);

// const userData = {
//   name: 'Ivan',
//   age: null,
//   say: function() {
//     console.log('hello');
//   }
// }

// userData.say();
// userData.hey?.();

// // if (userData && userData.skills && userData.skills.js) {
// //   console.log(userData.skills.js);
// // }

// console.log(userData?.skill?.js);


// module1-task47 живые коллекции и полезные методы

// const boxesQuery = document.querySelectorAll('.box');
// const boxesGet = document.getElementsByClassName('box');

// boxesQuery.forEach(box => {
//   if (box.matches('.this')) console.log(box);
// });

// console.log(boxesQuery[0].closest('.wrapper'));

// boxesQuery[0].remove();
// boxesGet[0].remove();

// for (let i = 0; i < 5; i++) {
//   const div = document.createElement('div');
//   div.classList.add('box');
//   // document.body.append(div);
//   // boxesGet[boxesGet.length] = div; // error
// }

// console.log(boxesQuery);
// console.log(boxesGet);
// // console.log(document.body.children);

// console.log(Array.from(boxesGet));


// module1-task48  тип данных symbol


// let id = Symbol("id");

// const obj = {
//   name: 'Test',
//   id: 1,
//   getId: function() {
//     return this(id);
//   }
// }

// // let id2 = Symbol("id");

// // console.log(id === id2);

// // obj[id] = 1;

// console.log(Object.getOwnPropertySymbols(obj));

// const myAwesomeDB = {
//   movies: [],
//   actors: [],
//   [Symbol("id")]: 123
// }

// // сторонний код библиотеки

// myAwesomeDB.id = "3233423425";

// console.log(myAwesomeDB["id"]);
// console.log(myAwesomeDB);



// module1-task50  итерируемые конструкции

// const user = {
//   name: 'Alex',
//   surname: 'Smith',
//   birthday: '20/04/1993',
//   showMyPublicData: function() {
//     console.log(`${this.name} ${this.surname}`);
//   }
// }

// for (const key in user) {
//   console.log(user[key]);
// }

// const arr = ['b', 'a', 'c'];
// Array.prototype.someMethod = function() {};

// // console.dir(arr)

// for (const key of arr) {
//   console.log(key);
// }

// const str = 'string';

// for (const key in str) {
//   console.log(str[key]);
// }

// const salaries = {
//   john: 500,
//   ivan: 1000,
//   ann: 5000,
//   sayHello: function() {
//     console.log('Hello');
//   }
// }

// salaries[Symbol.iterator] = function() {
//   return {
//     current: this.john,
//     last: this.ann,
//     next() {
//       if (this.current < this.last) {
//         this.current += 500;
//         return {done: false, value: this.current};
//       } else {
//         return {done: true};
//       }

//       // {done: true, value: 123}
//     }
//   }
// }

// const iterator = salaries[Symbol.iterator]();
// console.log(iterator.next());

// for (let res of salaries) {
//   console.log(res);
// }



// module1-task51  Map

// const user = {
//   4: 'Alex',
//   surname: 'Smith',
//   birthday: '20/04/1993',
//   showMyPublicData: function() {
//     console.log(`${this.name} ${this.surname}`);
//   }
// }
// console.log(user);

// const shops = [
//   {rice: 500},
//   {oil: 200},
//   {bread: 50}
// ];

// const budget = [5000, 15000, 25000];

// const map = new Map([
//   [{paper: 400}, 8000]
// ]);

// shops.forEach((shop, i) => {
//   map.set(shop, budget[i]);
// })

// map.set(shops[0], 5000);
// map.set(shops[1], 15000);
// map.set(shops[2], 25000);


// console.log(map);
// console.log(map.get(shops[0]));
// console.log(map.has(shops[0]));
// map.delete(key);
// map.clear();
// map.size;
// map.keys();

// const goods = [];
// for (let shop of map.keys()) {
//   goods.push(Object.keys(shop)[0]);
// }
// console.log(goods);

// for (let price of map.values()) {
//   console.log(price);
// }

// for (let price of map.entries()) {
//   console.log(price);
// }

// map.forEach((value, key, map) => {
//   console.log(key, value);
// })



// module1-task54 ClassList и делегирование событий

// const btns = document.querySelectorAll('button'),
//       wrapper = document.querySelector('.btn-block');

// console.log(btns[0].classList.length);
// console.log(btns[0].classList.item(1));
// console.log(btns[1].classList.add('red'));
// console.log(btns[0].classList.remove('blue'));
// console.log(btns[0].classList.toggle('blue'));

// if (btns[1].classList.contains('red')) {
//   console.log('red');
// }

// btns[0].addEventListener('click', () => {
  // if (!btns[1].classList.contains('red')) {
  //   btns[1].classList.add('red');
  // } else {
  //   btns[1].classList.remove('red');
  // }

  // btns[1].classList.toggle('red');
// });

// console.log(btns[0].className);

// wrapper.addEventListener('click', (event) => {
//   if (event.target && event.target.tagName == 'BUTTON') {
//     console.log('hello');
//   }
// })

// btns.forEach(btn => {
//   btn.addEventListener('click', () => {
//     console.log('hello');
//   })
// })

// const btn = document.createElement('button');
// btn.classList.add('red');
// wrapper.append(btn);

// const btns = document.querySelectorAll('button'),
//       wrapper = document.querySelector('.btn-block');

// console.log(btns[0].classList.length); // можно узнать кол-во классов элемента
// console.log(btns[0].classList.item(0)); // можно обратиться по индексу
// console.log(btns[0].classList.add('red', 'second-class')); // можно додавать классы
// console.log(btns[0].classList.remove('blue')); // можно удалять классы
// console.log(btns[0].classList.toggle('blue')); // позволяет тогглить классы

// if (btns[1].classList.contains('red')) { // проверяет наличие класса
//   console.log('red');
// }

// btns[0].addEventListener('click', () => {
//   // if (!btns[1].classList.contains('red')) {
//   //   btns[1].classList.add('red');
//   // } else {
//   //   btns[1].classList.remove('red');
//   // }

//   btns[1].classList.toggle('red');
// });

// console.log(btns[1].className); // этот метод устарел

// wrapper.addEventListener('click', (event) => { // event обьект события, содержит инфу о событии на элементе
//   if (event.target && event.target.tagName == 'BUTTON') {
//     console.log('Hello');
//   }
// }); // делегирование события на обертку

// wrapper.addEventListener('click', (event) => { // event обьект события, содержит инфу о событии на элементе
//   if (event.target && event.target.matches('button.red')) {
//     console.log('Hello');
//   }
// }); // делегирование через matches

// btns.forEach(btn => {
//   btn.addEventListener('click', () => {
//     console.log('hello'); // делегирования нет, скрипт не работает с новыми элементами
//   })
// })

// const btn = document.createElement('button'); // создает новый элемент
// btn.classList.add('red'); // добавляет класс
// wrapper.append(btn); // вставляет элемент в обертку wrapper


// module1-task55 создаем табы в новом проекте

// window.addEventListener('DOMContentLoaded', () => { // проверяет загруженный ли весь DOM

//   const tabs = document.querySelectorAll('.tabheader__item'), // создает переменную со всеми элементами в tabheader
//         tabsContent = document.querySelectorAll('.tabcontent'), // создает переменную со всеми карточками tabcontent
//         tabsParent = document.querySelector('.tabheader__items'); // создает переменную с оберткой элементов tabheader

//   function hideTabContent() { // создает функцию hideTabContent 
//     tabsContent.forEach(item => { // запускает перебор с аргументом item
//       item.classList.add('hide'); // добавляет класс hide 
//       item.classList.remove('show', 'fade'); // удаляет класс show и fade(анимация)
//     });

//     tabs.forEach(item => { // перебоп с удалением класса tabheader__active на элементе
//       item.classList.remove('tabheader__item_active');
//     });
//   }

//   function showTabContent(i = 0) {  // создает функцию showTabContent с параметром итератором и делает default 0
//     tabsContent[i].classList.add('show', 'fade'); // добавляет классы show и fade для всех обертки tabcontent
//     tabsContent[i].classList.remove('hide');  // удаляет класс hide с того же элемента
//     tabs[i].classList.add('tabheader__item_active'); // добавляет класс active item внутри tabheader__items
//   }

//   hideTabContent(); // вызов функции hideTabContent
//   showTabContent(); // вызов функции showTabContent

//   tabsParent.addEventListener('click', (event) => { // обработчик событий на нажатие с параметром event
//     const target = event.target; // создает переменную для event.target

//     if (target && target.classList.contains('tabheader__item')) { // условие для проверки наличия метода target и класса tabheader__item
//       tabs.forEach((item, i) => { // перебор на каждый элемент tabheader__item с параметрами item и номером по порядку i-iterator
//         if (target == item) { // если target == item вызываются функции hideTabContent и showTabContent
//           hideTabContent();
//           showTabContent(i);
//         }
//       })
//     }
//   })

// });



// module1-task56  setTimeout setInterval управление временем выполнения скриптов


// const timerId = setTimeout(function(text) { // внуть setTimeout поместили функцию с банальным console.log()
//   console.log(text);
// }, 2000, 'hello'); // указываем время через которое должен сработать код в теле функции в миллисекундах, 2000мс = 2с, плюс аргумент text


// const timerID = setTimeout(logger, 2000); // передаем параметры и время задержки выполнения

// function logger () {
//   console.log('text');
// }

// clearInterval(timerId); // комманда для зброса интервала

// const btn = document.querySelector('.btn');

// btn.addEventListener('click', () => {
//   // const timerID = setTimeout(logger, 2000);
//   const timerID = setInterval(logger, 2000); // функция для многократного использования интервала каждые н времени
// });

// let id = setTimeout(function log() {
//   console.log('hello');
//   id = setTimeout(log, 500);
// }, 500);

// const btn = document.querySelector('.btn'); // создаем переменную
// let timerId, // создаем пустую переменную глобально видимости
//     i = 0; // устанавливаем итератору значение 0

// function myAnimation() { // создаем функцию
//   const elem = document.querySelector('.box'); // создаем переменную
//   let position = 0; // значение 0 для позиционирования

//   const id = setInterval(frame, 10);

//   function frame() {
//     if (position = 300) { // если position доходит до 300 очищаем интервал
//       clearInterval(id);
//     } else {
//       position++;
//       elem.style.top = position + 'px';
//       elem.style.left = position + 'px';
//     }
//   }
// }

// btn.addEventListener('click', myAnimation); // вешаем анимацию на кнопку


// module1-task57 сборщик мусора и утечки памяти


// function func() {
//   window.smth = 'string'; // global variable, не может быть удалена сборщиком мусора
// }

// const someRes = getData();
// const node = document.querySelector('.class'); // ссылка на переменную

// setInterval(function() {
//   if (node) {
//     node.innerHTML = someRes; // ссылка на данные
//   }
// }, 1000); // память забивается ненужными данными

// function outer() {
//   const potentiallyHugeArray = [];
//   return function inner() {
//     potentiallyHugeArray.push('Hello');
//     console.log('hello');
//   }
// }

// const sayHello = outer();

// function createElement() {
//   const div = document.createElement('div');
//   div.id = 'test';
//   document.body.append(testDiv);
// }

// createElement();

// function deleteElement() {
//   document.body.removeChild(document.getElementById('test'));
// }

// deleteElement();


// module1-task58 WeakSet and WeakMap

// let user = {
//   name: 'ivan'
// };

// // const arr = [user]; // пока этот массив существует данные лежат в памяти

// let map = new Map();
// map.set(user, 'data');

// user = null;

// console.log(map.keys());

// console.log(user);
// console.log(arr[0]);

// let user = {name: 'ivan'};

// let map = new WeakMap();
// map.set(user, 'data');

// user = null;

// console.log(map.has(user));

// let cache = new WeakMap();

// function cacheUser(user) {
//   if (!cache.has(user)) {
//     cache.set(user, Date.now());
//   }

//   return cache.get(user);
// }

// let lena = {name: 'elena'};
// let alex = {name: 'alex'};

// cacheUser(lena);
// cacheUser(alex);

// lena = null;

// console.log(cache.has(lena));
// console.log(cache.has(alex));

// WeakSet
// add(), has(), delete()

// let messages = [
//   {text: 'hello', from: 'john'},
//   {text: 'world', from: 'alex'},
//   {text: '...', from: 'M'}
// ];

// let readMessages = new WeakSet();

// readMessages.add(messages[0]);
// readMessages.add(messages[1]);

// messages.shift();
// console.log(readMessages.has(messages[0]));


// module1-task59 работа с датами

// const now = new Date(2024, 2, 10, 20);

// console.log(now);

// const now = new Date(); // все в миллисекундах, начиная с 1970

// console.log(now);

// получение компонентов даты

// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getHours());
// console.log(now.getMinutes());
// console.log(now.getDay());
// console.log(now.getUTCHours()); // другой часовой пояс

// console.log(now.getTimezoneOffset());
// console.log(now.getTime()); // кол-во миллисекунд прошедшее с 1970


// // установщики компонентов даты, меняем get на set

// console.log(now.setHours(18)); // ориентируется на зону UTC

// new Date.parse('2020-05-01'); // то же самое что и в первом примере только через метод parse



// let start = new Date();

// for (let i = 0; i < 100000; i++) { // разница дат start и end и будем временем выполнения
//   let some = i ** 3;
// }

// let end = new Date();

// alert(`цыкл отработал за ${end - start} миллисекунд`);



// module1-task60 создаем таймер обратного отсчета на сайте


// const deadline = '2020-05-11'; // создается переменная dealine

// function getTimeRemaining(endtime) { // функция getTimeRemaining с параметром endtime
//   const t = Date.parse(endtime) - Date.parse(new Date()), // переменная t для установления разницы во времени в миллисекундах
//         days = Math.floor(t / (1000 * 60 * 60 * 24)),
//         hours = Math.floor((t / (1000 * 60 * 60) % 24)),
//         minutes = Math.floor((t / 1000 / 60) % 60),
//         seconds = Math.floor((t / 1000) % 60);

//   return { // возврат обьекта с значениями с вычислений
//     'total': t,
//     'days': days,
//     'hours': hours,
//     'minutes': minutes,
//     'seconds': seconds
//   };
// }

// function getZero(num) { // функция добавляет 0 если num меньше 10
//   if (num >= 0 && num < 10) {
//     return `0${num}`;
//   } else {
//     return num;
//   }
// }

// function setClock(selector, endtime) {
//   const timer = document.querySelector(selector),
//   days = timer.querySelector('#days'),
//   hours = timer.querySelector('#hours'),
//   minutes = timer.querySelector('#minutes'),
//   seconds = timer.querySelector('#seconds'),
//   timeInterval = setInterval(updateClock, 1000);

//   updateClock();

//   function updateClock() {
//     const t = getTimeRemaining(endtime);

//     days.innerHTML = getZero(t.days);
//     hours.innerHTML = getZero(t.hours);
//     minutes.innerHTML = getZero(t.minutes);
//     seconds.innerHTML = getZero(t.seconds);

//     if (t.total <= 0) {
//       clearInterval(timeInterval);
//     }
//   }
// }

// setClock('.timer', deadline);



// module1-task61 обработка прошедшей даты


// const deadline = '2020-05-11';

// function getTimeRemaining(endtime) {
//   let days, hours, minutes, seconds;
//   const t = Date.parse(endtime) - Date.parse(new Date());

//   if (t <= 0) {
//     days = 0;
//     hours = 0;
//     minutes = 0;
//     seconds = 0;
//   } else {
//     days = Math.floor(t / (1000 * 60 * 60 * 24)),
//     hours = Math.floor((t/ (1000 * 60 * 60) % 24)),
//     minutes = Math.floor((t / 1000 / 60) % 60),
//     seconds = Math.floor((t / 1000) % 60);
//   }

//   return {
//     'total': t,
//     'days': days,
//     'hours': hours,
//     'minutes': minutes,
//     'seconds': seconds,
//   };

// }

// function getZero(num) {
//   if (num >= 0 && num < 10) {
//     return `0${num}`;
//   } else {
//     return num;
//   }
// }

// function setClock(selector, endtime) {
//   const timer = document.querySelector(selector),
//         days = timer.querySelector('#days'),
//         hours = timer.querySelector('#hours'),
//         minutes = timer.querySelector('#minutes'),
//         seconds = timer.querySelector('#seconds'),
//         timeInterval = setInterval(updateClock, 1000);

//   updateClock();

//   function updateClock() {
//     const t = getTimeRemaining(endtime);

//     days.innerHTML = getZero(t.days);
//     hours.innerHTML = getZero(t.hours);
//     minutes.innerHTML = getZero(t.minutes);
//     seconds.innerHTML = getZero(t.seconds);

//     if (t.total <= 0) {
//       clearInterval(timeInterval);
//     }
//   }
// }

// setClock('.timer', deadline);



// module1-task62 параметры документа, окна и работа с ними


// const box = document.querySelector('.box'),
//       btn = document.querySelector('button');

// const width = box.clientWidth; // ширина без учета margin border и scroll
// const height = box.clientHeight; // высота без учета margin border и scroll

// console.log(width, height);


// const width = box.offsetWidth; // ширина с учетом margin border и scroll
// const height = box.offsetHeight; // высота с учетом margin border и scroll

// console.log(width, height);


// const width = box.scrollWidth; // ширина без учета полосы прокрутки
// const height = box.scrollHeight; // высота всего окна вместе с невидимыми частями за полосой прокрутки

// console.log(width, height);

// btn.addEventListener('click', () => {
//   box.style.height = box.scrollHeight + 'px'; // при клике на кнопку показывает весь текст
// });


// scrollTop и scrollLeft могут быть модифицированные, остальные только возвращают значение

// btn.addEventListener('click', () => {
//   console.log(box.scrollTop);
// });


// console.log(box.getBoundingClientRect()); // получает все кординаты которые есть у элемента
// console.log(box.getBoundingClientRect().top); // получает только значение top


// computed styles стили уже примененные к элементу, менять напрямую их никак нельзя


// const style = window.getComputedStyle(box);

// console.log(style);
// console.log(style.display); // можно обратиться и к одному свойству через точку

// методом getComputedStyle можем получить псевдоэлементы, только получение и проверка на соответсвие


// console.log(document.documentElement.clientWidth()); // у document нет таких методов, только через documentElement



// module1-task63 создаем модальное окно

// const modalTrigger = document.querySelectorAll('[data-modal]'), //получаем все триггеры через data атрибут
//       modal = document.querySelector('.modal'), // получаем модальное окно через класс modal
//       modalCloseBtn = document.querySelector('[data-close]'); // получаем кнопку для закрытия окна через data атрибут

// modalTrigger.forEach(btn => { // перебор всевдомассива и назначение обработчика событий
//   btn.addEventListener('click', () => {
//     modal.classList.add('show');
//     modal.classList.remove('hide');

//     document.body.style.overflow = 'hidden'; // не позволяет скролить страницу
//   });
// });

// function closeModal() { // функция для закрытия окна и предотвращения повторения кода
//   modal.classList.add('hide');
//   modal.classList.remove('show');

//   document.body.style.overflow = ''; // возвращает скролл
// }

// modalCloseBtn.addEventListener('click', closeModal);

// modal.addEventListener('click', (e) => {
//   if (e.target === modal) {
//     closeModal();
//   }
// })

// document.addEventListener('keydown', (e => {
//   if (e.code === 'Escape' && modal.classList.contains('show')) {
//     closeModal();
//   }
// }));


// module1-task64 модификации модального окна

// const modalTrigger = document.querySelectorAll('[data-modal]'),
//       modal = document.querySelector('.modal'),
//       modalCloseBtn = document.querySelector('[data-close]');

// function openModal() {
//   modal.classList.add('show');
//   modal.classList.remove('hide');
//   document.body.style.overflow = 'hidden';
//   clearInterval(modalTimerId);
// };

// modalTrigger.forEach(btn => {
//   btn.addEventListener('click', openModal);
// });

// function closeModal() {
//   modal.classList.add('hide');
//   modal.classList.remove('show');
//   document.body.style.overflow = '';
// };

// modalCloseBtn.addEventListener('click', closeModal);

// modal.addEventListener('click', (e) => {
//   if (e.target === modal) {
//     closeModal();
//   }
// });

// document.addEventListener('keydown', (e) => {
//   if (e.code === 'Escape' && modal.classList.contains('show')) {
//     closeModal();
//   }
// });

// const modalTimerId = setTimeout(openModal, 3000);

// function showModalByScroll() {
//   if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
//     openModal();
//     window.removeEventListener('scroll', showModalByScroll);
//   }
// }

// window.addEventListener('scroll', showModalByScroll);



// module1-task65 MutationObserver, ResizeObserver и contenteditable


// const box = document.querySelector('.box');

// let observer = new MutationObserver(mutationRecords => {
//   console.log(mutationRecords);
// });

// observer.observe(box, {
//   childList: true
// })



// module1-task66 функции конструкторы

// const num = new Number(3);
// console.log(num);

// function User(name, id) { // функция конструктор
//   this.name = name;
//   this.id = id;
//   this.human = true;
//   this.hello = function() {
//     console.log(`hello ${this.name}`);
//   }
// }

// User.prototype.exit = function() {
//   console.log(`user ${this.name} quit`)
// };

// const ivan = new User('Ivan', 28);
// const alex = new User('Alex', 20);

// ivan.exit();

// ivan.hello();
// alex.hello();

// console.log(ivan);
// console.log(alex);



// module1-task67 контекст вызова this


// функции могут вызываться 4 методами, и в каждом контексти вызова отличается


// 1 просто вызов функции

// function showThis() {
//   console.log(this);
// }

// showThis();

// function showThis(a, b) {
//   console.log(this);
//   function sum() {
//     console.log(this);
//     return a + b;
//   }

//   console.log(sum());
// }

// showThis(4, 5);

// обычная функция: this = window, но если use strict - undefined


// 2 контекст у методов обьекта - сам обьект

// const obj = {
//   a: 20,
//   b: 15,
//   sum: function() {
//     console.log(this);
//   }
// };

// obj.sum();


// 3 this в конструкторах и классах - это новый экземпляр обьекта

// function User(name, id) {
//   this.name = name;
//   this.id = id;
//   this.human = true;
// }

// let ivan = new User('ivan', 23);


// 4 ручная привязка this: call, apply, bind

// function sayName(surname) {
//   console.log(this);
//   console.log(this.name + surname);
// }

// const user = {
//   name: 'john'
// };

// sayName.call(user, 'smith'); // передаем через запятую
// sayName.apply(user, ['smith']); // передаем через запятую но в массиве

// function count(num) {
//   return this * num;
// }

// const double = count.bind(2);
// console.log(double(3));


// когда обработчик написан в классическом режиме, контекстом вызова будет обьект на котором произошло событие
// в обработчике при использовании стрелочной функции контекст вызова this теряется


// const btn = document.querySelector('button');

// btn.addEventListener('click', function() {
//   this.style.backgroundColor = 'red';
// });


// у стрелочной функции нет контекста вызова

// const obj = {
//   num: 5,
//   sayNumber: function() {
//     const say = () => {
//       console.log(this);
//     };

//     say();
//   }
// };

// obj.sayNumber();

// const double = (a) => {
//   return a * 2;
// };

// const double = (a) => a * 2; // return подставляется автоматически



// module1-task68 контекст вызова this

// function showThis() {
//   console.log(this);
// }

// showThis();

// function showThis(a, b) {
//   console.log(this);
//   function sum() {
//     console.log(this);
//     return this.a + this.b;
//   }

//   console.log(sum());
// }

// showThis(4, 5);

// 1) обычная функция: this === window, но если стоит use strict то будет undefined
// даже если функция внутри функции контекст будет таким же


// const obj = {
//   a: 20,
//   b: 15,
//   sum: function() {
//     console.log(this);
//   }
// }

// obj.sum();

// const obj = {
//   a: 20,
//   b: 15,
//   sum: function() {
//     function shout() {
//       console.log(this); // это уже не метод обьекта это просто функция внутри теле функции которая и является методом
//     }                    // результат также будет undefined

//     shout();
//   }
// }

// obj.sum();

// 2) контекстом у методов обьекта является сам обьект


// function User(name, id) { // функция конструктор, при вызове создаст новый обьект
//   this.name = name;
//   this.id = id;
//   this.human = true;
// }

// let ivan = new User('Ivan', 23);

// 3) this в функциях конструкторах и классах - это новый экземпляр обьекта


// function sayName(surname) {
//   console.log(this);
//   console.log(this.name);
// }

// const user = {
//   name: 'john',
// }

// sayName.call(user, 'smith'); // аргументы передаются через запятую в качестве строки
// sayName.apply(user, ['smith']); // аргументы передаются через массив так же в качестве строки

// function count(num) {
//   return this * num;
// }

// const double = count.bind(2);
// console.log(double(3));

// 4) ручная привязка this, call, apply, bind



// const btn = document.querySelector('button');

// btn.addEventListener('click', function() { // контекстом будет элемент на котором произошло событие
//   console.log(this); // обычная коллбэк функция внутри слушателя событий
// });


// const obj = {
//   num: 5,
//   sayNumber: function() { // а метод всегда ссылается на обьект в котором вызывается
//     const say = () => { // у стрелочной функции нет контекста вызова, она всегда берет контекст у родителя, в данном случае метод sayNumber()
//       console.log(this);
//     }

//     say();
//   }
// }

// obj.sayNumber();



// module1-task69 // классы ES6

// class Rectangle {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }

//   calcArea() {
//     return this.height * this.width;
//   }
// }

// class ColoredRectangleWithText extends Rectangle {
//   constructor(height, width, text, bgColor) {
//     super(height, width);
//     this.text = text;
//     this.bgColor = bgColor;
//   }

//   showMyProps() {
//     console.log(`text: ${this.text}, color: ${this.bgColor}`)
//   }
// }

// const div = new ColoredRectangleWithText(25, 10, 'hello world', 'red');

// div.showMyProps();
// console.log(div.calcArea());

// const square = new Rectangle(10, 10);
// const long = new Rectangle(20, 100);

// console.log(square.calcArea());
// console.log(long.calcArea());



// module1-task70 используем классы в реальной работеа

// class MenuCard { // создание класса
//   constructor(src, alt, title, descr, price, parentSelector) { // вызов метода constructor и передача параметров
//     this.src = src; // присвоений пераметров при будущем создании обьекта с помощю this
//     this.alt = alt;
//     this.title = title;
//     this.descr = descr;
//     this.price = price;
//     this.parent = document.querySelector(parentSelector); // помещение родителя  в свойство parent 
//     this.transfer = 27;
//     this.changeToUah();
//   }

//   changeToUah() { // метод классы вычисляющий курс валют
//     this.price = this.price * this.transfer;
//   }

//   render() { // метод классы создающий элемент div
//     const element = document.createElement('div'); // создание элемента и присвоение в переменную
//     div.innerHTML = `
//       <div class="menu__item">
//         <img src=${this.src} alt=${this.alt}>
//         <h3 class="menu__item-subtitle">${this.title}</h3>
//         <div class="menu__item-descr">${this.descr}</div>
//         <div class="menu__item-divider"></div>
//         <div class="menu__item-price">
//             <div class="menu__item-cost">Цена:</div>
//             <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
//         </div>
//       </div>
//     `; // задание шаблона элемента с помощю интерполяции

//     this.parent.append(element); // вызов метода append на родителе для добавления element в DOM структуру
//   }
// }

// new MenuCard( // создание нового обьекта MenuCard
//   "img/tabs/vegy.jpg", // присвоение значений для свойств this
//   "vegy",
//   "Меню 'Фитнес'",
//   "Меню 'Фитнес' - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!",
//   229,
//   ".menu .container", 
// ).render(); // вызов без сохранения в переменную

// const div = new MenuCard(); // стандартый вызов с созданием обьекта в переменной
// div.render();



// module1-task76 rest оператор и параметры по умолчанию


// const log = function(a, b, ...rest) {
//   console.log(a, b, rest);
// }

// log('basic', 'rest', 'operator', 'usage');

// function calcOrDouble(number, basis) {
//   console.log(number * basis);
// }

// calcOrDouble(3, 5); // 15

// // что если не передан какой либо аргумент

// function calcOrDouble(number, basis) { // не всегда надежно, может привести к ошибке
//   basis = basis || 2;
//   console.log(number * basis);
// }

// calcOrDouble(3);

// // стандарт ES6

// function calcOrDouble(number, basis = 2) { // параметр по умолчанию задается прямо в дужках
//   console.log(number * basis);
// }

// calcOrDouble(3);



// class MenuCard { // создание класса
//   constructor(src, alt, title, descr, price, parentSelector, ...classes) { // вызов метода constructor и передача параметров
//     this.src = src; // присвоений пераметров при будущем создании обьекта с помощю this
//     this.alt = alt;
//     this.title = title;
//     this.descr = descr;
//     this.price = price;
//     this.classes = classes;
//     this.parent = document.querySelector(parentSelector); // помещение родителя  в свойство parent 
//     this.transfer = 27;
//     this.changeToUah();
//   }

//   changeToUah() { // метод класса вычисляющий курс валют
//     this.price = this.price * this.transfer;
//   }

//   render() { // метод класса создающий элемент div
//     const element = document.createElement('div'); // создание элемента и присвоение в переменную
//     if (this.classes.length === 0) {
//       this.element = 'menu__item';
//       element.classList.add(this.element);
//     } else {
//       this.classes.forEach(className => element.classList.add(className));
//     }

//     div.innerHTML = `
//         <img src=${this.src} alt=${this.alt}>
//         <h3 class="menu__item-subtitle">${this.title}</h3>
//         <div class="menu__item-descr">${this.descr}</div>
//         <div class="menu__item-divider"></div>
//         <div class="menu__item-price">
//             <div class="menu__item-cost">Цена:</div>
//             <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
//         </div>
//     `; // задание шаблона элемента с помощю интерполяции

//     this.parent.append(element); // вызов метода append на родителе для добавления element в DOM структуру
//   }
// }

// new MenuCard( // создание нового обьекта MenuCard
//   "img/tabs/vegy.jpg", // присвоение значений для свойств this
//   "vegy",
//   "Меню 'Фитнес'",
//   "Меню 'Фитнес' - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!",
//   229,
//   ".menu .container",
//   "menu__item" 
// ).render(); // вызов без сохранения в переменную





// module1-task72 ajax

// калькулятор валют

// const inputRub = document.querySelector('#rub'),
//       inputUsd = document.querySelector('#usd');

// inputRub.addEventListener('input', () => {
//   const request = new XMLHttpRequest(); // переменная запрос(request) в которой создается обьект XMLHttpRequest

//   // request.open(method, url, async, login, pass); // собирает настройки чтобы в будущем сделать запрос
//   // request.setRequestHeader('Content-type', 'application/json; charset=utf-8') // http заголовок, нужен для передачи json файлов
//   // request.send(body) // отправляет запрос, отличается в зависимости от метода указанного в open() 
  
//   request.open('GET', 'js/current.json',);
//   request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
//   request.send();

//   // свойства обьекта httpRequest

//   // status содержит статус нашего запроса н 404 200 400
//   // statusText текстовое описание от сервера н OK, Not found
//   // response (ответ) от backand разработчика
//   // readyState содержит текущее состояние запроса (1 - 4)

//   // события обьекта

//   request.addEventListener('readystatechange', () => { // событие отслеживает готовност запроса (1 - 4)
//     if (request.readyState === 4 && request.status === 200) {
//       console.log(request.response); // возвращает ответ json
//       const data = JSON.parse(request.response); // парсим json файл в обычный обьект

//       inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
//     } else {
//       inputUsd.value = 'что-то пошло не так';
//     }
//   });

//   // request.addEventListener('load', () => { // второе событие, срабатывает когда запрос полностью готов

//   // })
// });





// module1-task73 реализация скрипта отправки данных на сервер

// const forms = document.querySelector('form');  // получаем формы и присваиваем переменной

// const message = {     // создаем переменную с ответами для пользователя
//   loading: 'loading',
//   success: 'success',
//   failure: 'sorry, something wrong'
// };

// forms.forEach(item => { // вешаем на формы выполнение функции
//   postData(item);
// });

// function postData(form) { // создаем функцию с параметром form
//   form.addEventListener('submit', (e) => { // вешаем на форму обработчик событий и коллбэк с параметром event
//     e.preventDefault(); // збрасываем обьект event

//     const statusMessage = document.createElement('div'); // создаем элемент внутри переменной
//     statusMessage.classList.add('status'); // присваиваем ей класс
//     statusMessage.textContent = message.loading; // вставляем текст с обекта message
//     form.append(statusMessage); // вставляем сообщение в форму

//     const request = new XMLHttpRequest(); // обект httpRequest внутри переменной запрос
//     request.open('POST', 'server.php'); // отправляем запрос методом POST


//     // request.setRequestHeader('Content-type', 'multipart/form-data');
//     // // заголовок говорит серверу что именно приходит
//     // // при использовании httpRequest в связке с FormData заголовок не нужен, сервер сам определяет что ему нужно

//     // // код ниже используется при передаче в формате json

//     // request.setRequestHeader('Content-type', 'application/json'); // присваиваем заголовок
//     // const formData = new FormData(form); // создаем новый бьект с параметром form

//     // const object = {}; // создаем пустой обьект для данных
//     // formData.forEach(function(value, key) { // вешаем перебой ключей для всех форм
//     //   object[key] = value; // присваиваем результат перебора в пустой обьект
//     // })

//     // const json = JSON.stringify(object); // переводим обект в формат JSON

//     // request.send(json); // отправляем запрос


//     const formData = new FormData(form); // создаем обьект присваивая переменной
    
//     request.send(formData); // отправляем запрос

//     request.addEventListener('load', () => { // вешаем обработчик с параметром load
//       if (request.status === 200) { // условие если ответ 200 OK
//         console.log(request.response); // выводим ответ в консоль
//         statusMessage.textContent = message.success; // добавляем ответ пользователю
//         form.reset(); // обнуляем форму
//         setTimeout(() => { // запускаем таймер
//           statusMessage.remove(); // удаляет ответ
//         }, 2000) // через 2 секунды после появления
//       } else { // если загрузка не удалась
//         statusMessage.textContent = message.failure; // выводим сообщение об ошибке
//       }
//     });
//   });
// }



// module1-task74 красивое оповещение пользователя

// const forms = document.querySelectorAll('form');

// const message = {
//   loading: 'img/svg/spinner.svg',
//   success: 'success',
//   failure: 'oops, something wrong'
// };

// forms.forEach(item => {
//   postData(item);
// });

// function postData(form) {
//   form.addEventListener('submit', (e) => {
//     e.preventDefault();

//     const statusMessage = document.createElement('img');
//     statusMessage.src = message.loading;
//     statusMessage.style.cssText = `
//       display: block;
//       margin: 0 auto;
//     `;
//     form.insertAdjacentElement('afterend', statusMessage);

//     const request = new XMLHttpRequest();
//     request.open('POST', 'server.php');

//     const formData = new FormData(form);

//     request.send(formData);

//     request.addEventListener('load', () => {
//       if (request.status === 200) {
//         console.log(request.response);
//         showThanksModal(message.success);
//         form.reset();
//         statusMessage.remove();
//       } else {
//         showThanksModal(message.failure);
//       }
//     })
//   });
// }

// function showThanksModal(message) {
//   const prevModalDialog = document.querySelector('.modal__dialog');

//   prevModalDialog.classList.add('hide');
//   openModal();

//   const thanksModal = document.createElement('div');
//   thanksModal.classList.add('modal__dialog');
//   thanksModal.innerHTML = `
//     <div class="modal__content>
//       <div class="modal__close" data-close>x</div>
//       <div class="modal__title">${message}</div>
//     </div>
//   `;

//   document.querySelector('.modal').append(thanksModal);
//   setTimeout(() => {
//     thanksModal.remove();
//     prevModalDialog.classList.add('show');
//     prevModalDialog.classList.remove('hide');
//     closeModal();
//   }, 4000);
// }



// module1-task76   Promise(es6)

// promise - обещание работает с асинхронным кодом


// console.log('запрос данных') // синхронный код

// const req = new Promise(function(resolve, reject) {

//   setTimeout(() => { // хуй пойми че ебать, таймер в таймере асинхронное пекло
//     console.log('подготовка данных');
  
//     const product = {
//       name: 'tv',
//       price: 2000
//     };
  
//     resolve(product);
  
//   }, 2000);

// });

// req.then((product) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       product.status = 'order';
//       resolve(product);
//     }, 2000);
//   });
// }).then(data => {
//   data.modify = true;
//   return data;
// }).then(data => {
//   console.log(data);
// }).catch(() => {
//   console.log('error');
// }).finally(() => {
//   console.log('finally')
// });


// const test = time => {
//   return new Promise(resolve => {
//     setTimeout(() => resolve(), time);
//   });
// };

// // test(1000).then(() => console.log("1000"));
// // test(2000).then(() => console.log("2000"));

// Promise.all([test(1000), test(2000)]).then(() => {
//   console.log('All');
// });

// Promise.race([test(1000), test(2000)]).then(() => {
//   console.log('All');
// });




// module1-task77   Fetch API

// const forms = document.querySelectorAll('form');
// const message = {   // создается переменная с ответами пользователю
//   loading: 'img/svg/spinner.svg',
//   success: 'success',
//   failure: 'oops, something wrong'
// };

// forms.forEach(item => {   // функция postData вешается на каждый элемент методом forEach
//   postData(item);
// });

// function postData(form) {   // создание функции postData с параметром form
//   form.addEventListener('submit', (e) => {    // вешаем обработчик события submit с обьектом события e
//     e.preventDefault(); // сбрасываем обычное поведение т.е. перезагрузку при отправке формы

//     let statusMessage = document.createElement('img');    // создаем элемент img в переменной statusMessage
//     statusMessage.src = message.loading;  // вешаем атрибуту svg крутилку с обьекта message
//     statusMessage.style.cssText = `
//       display: block;
//       margin: 0 auto;
//     `;    // добавляем стили для центрирования крутилки
//     form.insertAdjacentElement('afterend', statusMessage); // вставляем крутилку после формы методом insertAdjacentElement()

//     // const request = new XMLHttpRequest(); // создаем переменную с обьектом httpRequest
//     // request.open('POST', 'server.php'); // собираем ностройки для будущего запроса

//     const formData = new FormData(form);  // создаем обьект FormData в переменной formData

//     const object = {};
//     formData.forEach(function(value, key) {
//       object[key] = value;
//     });

//     fetch('server.php', {
//       method: 'POST',
//       headers: {
//         'Content-type': 'application/json'
//       },
//       body: JSON.stringify(object)
//     }).then(data => {
//       console.log(data);
//       showThanksModal(message.success);
//       statusMessage.remove();
//     }).catch(() => {
//       showThanksModal(message.failure);
//     }).finally(() => {
//       form.reset();
//     })
    
//   });
// }

// function showThanksModal(message) {
//   const prevModalDialog = document.querySelector('.modal__dialog');

//   prevModalDialog.classList.add('hide');
//   openModal();

//   const thanksModal = document.createElement('div');
//   thanksModal.classList.add('modal__dialog');
//   thanksModal.innerHTML = `
//     <div class="modal__content>
//       <div class="modal__close" data-close>x</div>
//       <div class="modal__title">${message}</div>
//     </div>
//   `;

//   document.querySelector('.modal').append(thanksModal);
//   setTimeout(() => {
//     thanksModal.remove();
//     prevModalDialog.classList.add('show');
//     prevModalDialog.classList.remove('hide');
//     closeModal();
//   }, 4000);
// }

// //  API // набор данных и возможностей
// //  DOM API // методы которые позволяют работать со страницой

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))




// module1-task78  методы перебора массивов


// filter

// const names = ['Ivan', 'Ann', 'Ksenia', 'Vsevolod'];

// const shortNames = names.filter((name) => {   // создает новый массив методом filter()
//   return name.length < 5;
// });

// console.log(shortNames);


// // map

// const answers = ['IvAn', 'AnnA', 'HellO'];

// const result = answers.map(item => item.toLowerCase()); // создает новый массив методом map()

// console.log(result);


// // every/some

// // some если хотя бы 1 элемент в переборе подходит по условию вернет true

// const some = [4, 'ahe', 'sauev'];

// console.log(some.some(item => typeof(item) === 'number'));


// // every каждые элемент должет подходить условию

// const every = [5, 19, 83];

// console.log(every.every(item => typeof(item) === 'number'));


// // reduce

// // const arr = [4, 5, 1, 3, 2, 6];      // numbers
// //                     //   0      4
// //                     //   4      5
// //                     //   9      1
// //                     //   10     3
// // const res = arr.reduce((sum, current) => sum + current) //  можно 3 аргументом добавить начальное значение, н.п  3

// // console.log(res);


// const arr = ['apple', 'pear', 'plum'];      // strings

// const res = arr.reduce((sum, current) => `${sum}, ${current}`);

// console.log(res);


// const obj = {
//   ivan: 'persone',
//   ann: 'persone',
//   dog: 'animal',
//   cat: 'animal'
// };

// const newArr = Object.entries(obj)
// .filter(item => item[1] === 'persone')
// .map(item => item[0]);

// console.log(newArr);





// filter 

// const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemar'];

// const shortNames = names.filter((name) => {
//   return name.length < 5;
// })

// console.log(shortNames);


// // map

// const answers = ['IvAn', 'AnnA', 'HellO'];

// // const result = answers.map(item => item.toLowerCase());

// console.log(result);


// // every / some

// const some = [4, 'qwf', 'sdbufs'];

// // console.log(some.some(item => typeof(item) === 'number'));  true
// // console.log(some.every(item => typeof(item) === 'number'));  false



// // reduce 

// // схлоповает массив в одно целое

// const arr = [4, 5, 1, 3, 2, 6];
//                     //  0      4
//                   //    4      5
// const res = arr.reduce((sum, current) => sum + current);
// console.log(res);


// // работает и со строками

// const newArr = ['apple', 'pear', 'plum'];
//                               // третим аргуметом в reduce можно повесть значение по умолчанию
// const result = newArr.reduce((sum, current) => `${sum}, ${current}`); 
// console.log(result);





// module1-task79 Подробно про npm и проект. JSON-server


// npm init
// answer the questions
// is this OK?
// появляется package.json




// module1-task80 получение данных с сервера async/await




// module1-task81 Дополнительно: Что такое библиотеки. Библиотека axios

// библиотека это готовый ресурс для решения проблем

// getResource('http://localhost:3000/menu')
    //     .then(data => {
            // data.forEach(({img, altimg, title, descr, price}) => {
            //     new MenuCard(img, altimg, title, descr, price, ".menu .container").render();
            // });
    //     });


// axios.get('http://localhost:3000/menu')
//         .then(data => {
//             data.data.forEach(({img, altimg, title, descr, price}) => {
//                 new MenuCard(img, altimg, title, descr, price, ".menu .container").render();
//             });
//         });

// ці два шматки кода роблять те саме, тільки в одному через метод getResource а другий через бібліотеку axios




// module1-task82 Создаем слайдер на сайте, вариант 1


// Slider

// const slides = document.querySelectorAll('.offer__slide'),
//       prev = document.querySelector('.offer__slider-prev'),
//       next = document.querySelector('.offer__slider-next'),
//       total = document.querySelector('#total'),
//       current = document.querySelector('#current');
// let slideIndex = 1;

// showSlides(slideIndex);

// if (slides.length < 10) {
//   total.textContent = `0${slides.length}`;
// } else {
//   total.textContent = slides.length;
// }

// function showSlides(n) {
//   if (n > slides.length) {
//     slideIndex = 1;
//   };

//   if (n < 1) {
//     slideIndex = slides.length;
//   };

//   slides.forEach(item => item.style.display = "none");

//   slides[slideIndex - 1].style.display = "block";

//   if (slides.length < 10) {
//   current.textContent = `0${slideIndex}`;
//   } else {
//   current.textContent = slideIndex;
//   };

// };

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// };

// prev.addEventListener('click', () => {
//   plusSlides(-1);
// });

// next.addEventListener('click', () => {
//   plusSlides(1);
// });



// module1-task83 Создаем слайдер на сайте, вариант 2

// const slides = document.querySelectorAll('.offer__slide'),
//       prev = document.querySelector('.offer__slider-prev'),
//       next = document.querySelector('.offer__slider-next'),
//       total = document.querySelector('#total'),
//       current = document.querySelector('#current'),
//       slidesWrapper = document.querySelector('.offer__slider-wrapper'),
//       slidesField = document.querySelector('.offer__slider-inner'),
//       width = window.getComputedStyle(slidesWrapper).width;
// let slideIndex = 1;
// let offset = 0;

// if (slides.length < 10) {
//   total.textContent = `0${slides.length}`;
//   current.textContent = `0${slideIndex}`;
// } else {
//   total.textContent = slides.length;
//   current.textContent = slideIndex;
// }

// slidesField.style.width = 100 * slides.length + '5';
// slidesField.style.display = 'flex';
// slidesField.style.transition = '0.5s all';

// slidesWrapper.style.overflow = 'hidden';

// slides.forEach(slide => {
//   slide.style.width = width;
// })

// next.addEventListener('click', () => {
//   if (offset == +width.slice(0, width.length - 2) * (slides.length - 1)) {
//     offset = 0;
//   } else {
//     offset += +width.slice(0, width.length - 2);
//   }

//   slidesField.style.transform =  `translateX(-${offset}px)`;

//   if (slideIndex == slides.length) {
//     slideIndex = 1;
//   } else {
//     slideIndex++;
//   }

//   if (slides.length < 10) {
//     current.textContent = `0${slideIndex}`;
//   } else {
//     current.textContent = slideIndex;
//   }

// })

// prev.addEventListener('click', () => {
//   if (offset == 0) {
//     offset = +width.slice(0, width.length - 2) * (slides.length -1);
//   } else {
//     offset -= +width.slice(0, width.length -2);
//   }

//   slidesField.style.transform = `translateX(-${offset}px)`;

//   if (slideIndex == 1 ) {
//     slideIndex = slides.length;
//   } else {
//     slideIndex--;
//   }

//   if (slides.length < 10) {
//     current.textContent = `0${slideIndex}`;
//   } else {
//     current.textContent = slideIndex;
//   }

// })






// module1-task84 Создаем навигацию для слайдов



// let slideIndex = 1;
// let offset = 0;

// const slides = document.querySelectorAll('.offer__slide'),
//       slider = document.querySelector('.offer__slider'),
//       prev = document.querySelector('.offer__slider-prev'),
//       next = document.querySelector('.offer__slider-next'),
//       total = document.querySelector('#total'),
//       current = document.querySelector('#current'),
//       slidesWrapper = document.querySelector('.offer__slider-wrapper'),
//       slidesField = document.querySelector('.offer__slider-inner'),
//       width = window.getComputedStyle(slidesWrapper).width;

// if (slides.length < 10) {
//   total.textContent = `0${slides.length}`;
//   current.textContent = `0${slideIndex}`;
// } else {
//   total.textContent = slides.length;
//   current.textContent = slideIndex;
// }

// slidesField.style.width = 100 * slides.length + '%';
// slidesField.style.display = 'flex';
// slidesField.style.transition = '0.5s all';

// slidesWrapper.style.overflow = 'hidden';

// slides.forEach(slide => {
//   slide.style.width = width;
// });

// slider.style.position = 'relative';

// const indicators = document.createElement('ol'),
//       dots = [];

// indicators.classList.add('carousel-indicators');
// indicators.style.cssText = `
//   position: absolute;
//   right: 0;
//   bottom: 0;
//   left: 0;
//   z-index: 15;
//   display: flex;
//   justify-content: center;
//   margin-right: 15%;
//   margin-left: 15%;
//   list-style: none;
// `;
// slider.append(indicators);

// for (let i = 0; i < slides.length; i++) {
//   const dot = document.createElement('li');
//   dot.setAttribute('data-slide-to', i + 1);
//   dot.style.cssText = `
//     box-sizing: content-box;
//     flex: 0 1 auto;
//     width: 30px;
//     height: 6px;
//     margin-right: 3px;
//     margin-left: 3px;
//     cursor: pointer;
//     background-color: #fff;
//     background-clip: padding-box;
//     border-top: 10px solid transparent;
//     border-bottom: 10px solid transparent;
//     opacity: .5;
//     transition: opacity .6s ease;
//   `;
//   if (i == 0) {
//     dot.style.opacity = 1;
//   }
//   indicators.append(dot);
//   dots.push(dot);

// }

// next.addEventListener('click', () => {
//   if (offset == +width.slice(0, width.length - 2) * (slides.length -1)) {
//     offset = 0;
//   } else {
//     offset += +width.slice(0, width.length - 2);
//   }

//   slidesField.style.transform = `translateX(-${offset}px)`;

//   if (slideIndex == slides.length) {
//     slideIndex = 1;
//   } else {
//     slideIndex++;
//   }

//   if (slides.length < 10) {
//     current.textContent = `0${slideIndex}`;
//   } else {
//     current.textContent = slideIndex;
//   }

//   dots.forEach(dot => dot.style.opacity = '.5');
//   dots[slideIndex - 1].style.opacity = 1;

// });

// prev.addEventListener('click', () => {
//   if (offset == +width.slice(0, width.length - 2) * (slides.length -1)) {
//     offset = 0;
//   } else {
//     offset -= +width.slice(0, width.length - 2);
//   }

//   slidesField.style.transform = `translateX(-${offset}px)`;

//   if (slideIndex == 1) {
//     slideIndex = slides.length;
//   } else {
//     slideIndex--;
//   }

//   if (slides.length < 10) {
//     current.textContent = `0${slideIndex}`;
//   } else {
//     current.textContent = slideIndex;
//   }

//   dots.forEach(dot => dot.style.opacity = '.5');
//   dots[slideIndex - 1].style.opacity = 1;

// });

// dots.forEach(dot => {
//   dot.addEventListener('click', (e) => {
//     const slideTo = e.target.getAttribute('data-slide-to');

//     slideIndex = slideTo;
//     offset = +width.slice(0, width.length - 2) * (slideTo - 1);

//     slidesField.style.transform = `translateX(-${offset}px)`;

//     if (slides.length < 10) {
//       current.textContent =  `0${slideIndex}`;
//     } else {
//       current.textContent = slideIndex;
//     }

//     dots.forEach(dot => dot.style.opacity = '.5');
//     dots[slideIndex - 1].style.opacity = 1;

//   });
// });





// module1-task85 Как сохранить данные без БД. Работа с localStorage


// local storage это свойство глобального обьекта window которое может сохранять данные
// уникальный для каждого домена




// const checkbox = document.querySelector('#checkbox'),
//       form = document.querySelector('form'),
//       change = document.querySelector('#color');

// if (localStorage.getItem('isChecked')) {
//   checkbox.checked = true;
// }

// if (localStorage.getItem('bg') === 'changed') {
//   form.style.backgroundColor = 'red';
// }

// checkbox.addEventListener('change', () => {
//   localStorage.setItem('isChecked', true);
// });

// change.addEventListener('click', () => {
//   if (localStorage.getItem('bg') === 'changed') {
//     localStorage.removeItem('bg');
//     form.style.backgroundColor = '#fff';
//   } else {
//     localStorage.setItem('bg', 'changed');
//     form.style.backgroundColor = 'red';
//   }
// });

// const person = {
//   name: 'Alex',
//   age: 25
// };

// const serializedPeson = JSON.stringify(person);
// localStorage.setItem('alex', serializedPeson);

// console.log(JSON.parse(localStorage.getItem('alex')));


// working and memmory test
// fuck chto nibud zaporol pohodu




// module1-task87
// we need second test




// module1-task88 deep copy of obj, because you stupid as fuck dont study for a half year, congratulations

// const person = {
//   name: 'Alex',
//   tel: '+7555877',
//   parents : {
//     mom: 'Olga',
//     dad: 'Mike'
//   }
// };

// // console.log(JSON.stringify(person)); // method stringigy tranform simple obj to JSON obj, all JSON keys and values need to be wroten in double quotes

// // console.log(JSON.parse(JSON.stringify(person))); // method parse tranform JSON obj to simple obj, keys and values will be in simple quotes

// const clone = JSON.parse(JSON.stringify(person)); // make a deep independent copy of any JS obj
// clone.parents.mom = "Ann";
// console.log(person); // mom will be Olga
// console.log(clone); // mom will be Ann




// module1-task89 AJAX and talk with the server

// const inputRub = document.querySelector('#rub'),
//       inputUsd = document.querySelector('#usd');

// inputRub.addEventListener('input', () =>  {
//   const request = new XMLHttpRequest();

//   request.open('GET', 'js/current.json'); // method, url, async, login, pass
//   request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
//   request.send() // body

//   request.addEventListener('readystatechange', () => {
//     if (request.readyState === 4 && request.status === 200) {
//       const data = JSON.parse(request.response);
//       inputUsd.value = (+inputRub.value / data.current.usd).toFixed();
//     } else {
//       inputUsd.value = 'something went wrong'
//     }
//   });

//   // status  статус запроса
//   // statusText текст запроса
//   // response ответ сервера
//   // readyState текущее состояние запроса

// });




// module1-task90 realisation of send data to server script

// window.addEventListener('DOMContentLoaded', function() {

//   // Tabs
  
// let tabs = document.querySelectorAll('.tabheader__item'),
//   tabsContent = document.querySelectorAll('.tabcontent'),
//   tabsParent = document.querySelector('.tabheader__items');

// function hideTabContent() {
      
//       tabsContent.forEach(item => {
//           item.classList.add('hide');
//           item.classList.remove('show', 'fade');
//       });

//       tabs.forEach(item => {
//           item.classList.remove('tabheader__item_active');
//       });
// }

// function showTabContent(i = 0) {
//       tabsContent[i].classList.add('show', 'fade');
//       tabsContent[i].classList.remove('hide');
//       tabs[i].classList.add('tabheader__item_active');
//   }
  
//   hideTabContent();
//   showTabContent();

// tabsParent.addEventListener('click', function(event) {
//   const target = event.target;
//   if(target && target.classList.contains('tabheader__item')) {
//           tabs.forEach((item, i) => {
//               if (target == item) {
//                   hideTabContent();
//                   showTabContent(i);
//               }
//           });
//   }
//   });
  
//   // Timer

  

//   // Modal

//   const modalTrigger = document.querySelectorAll('[data-modal]'),
//       modal = document.querySelector('.modal'),
//       modalCloseBtn = document.querySelector('[data-close]');

//   modalTrigger.forEach(btn => {
//       btn.addEventListener('click', openModal);
//   });

//   function closeModal() {
//       modal.classList.add('hide');
//       modal.classList.remove('show');
//       document.body.style.overflow = '';
//   }

//   function openModal() {
//       modal.classList.add('show');
//       modal.classList.remove('hide');
//       document.body.style.overflow = 'hidden';
//       clearInterval(modalTimerId);
//   }
  
//   modalCloseBtn.addEventListener('click', closeModal);

//   modal.addEventListener('click', (e) => {
//       if (e.target === modal) {
//           closeModal();
//       }
//   });

//   document.addEventListener('keydown', (e) => {
//       if (e.code === "Escape" && modal.classList.contains('show')) { 
//           closeModal();
//       }
//   });

//   const modalTimerId = setTimeout(openModal, 300000);
//   // Изменил значение, чтобы не отвлекало

//   function showModalByScroll() {
//       if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
//           openModal();
//           window.removeEventListener('scroll', showModalByScroll);
//       }
//   }
//   window.addEventListener('scroll', showModalByScroll);

//   // Используем классы для создание карточек меню

  



//   // Forms

// const forms = document.querySelectorAll('form');
// const message = {
//     loading: 'Загрузка...',
//     success: 'Спасибо! Скоро мы с вами свяжемся',
//     failure: 'Что-то пошло не так...'
// };

// forms.forEach(item => {
//     postData(item);
// });

// function postData(form) {
//     form.addEventListener('submit', (e) => {
//         e.preventDefault();

//         let statusMessage = document.createElement('div');
//         statusMessage.classList.add('status');
//         statusMessage.textContent = message.loading;
//         form.appendChild(statusMessage);
    
//         const request = new XMLHttpRequest();
//         request.open('POST', 'server.php');
//         request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
//         const formData = new FormData(form);

//         const object = {};
//         formData.forEach(function(value, key){
//             object[key] = value;
//         });
//         const json = JSON.stringify(object);

//         request.send(json);

//         request.addEventListener('load', () => {
//             if (request.status === 200) {
//                 console.log(request.response);
//                 statusMessage.textContent = message.success;
//                 form.reset();
//                 setTimeout(() => {
//                     statusMessage.remove();
//                 }, 2000);
//             } else {
//                 statusMessage.textContent = message.failure;
//             }
//         });
//     });
//   }



// module1-task91 message for the user

// window.addEventListener('DOMContentLoaded', function() {

//   const forms = document.querySelectorAll('form');
//   const message = {
//       loading: 'Загрузка...',
//       success: 'Спасибо! Скоро мы с вами свяжемся',
//       failure: 'Что-то пошло не так...'
//   };

//   forms.forEach(item => {
//       postData(item);
//   });

//   function postData(form) {
//       form.addEventListener('submit', (e) => {
//           e.preventDefault();

//           let statusMessage = document.createElement('div');
//           statusMessage.classList.add('status');
//           statusMessage.textContent = message.loading;
//           form.appendChild(statusMessage);
      
//           const request = new XMLHttpRequest();
//           request.open('POST', 'server.php');
//           request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
//           const formData = new FormData(form);

//           const object = {};
//           formData.forEach(function(value, key){
//               object[key] = value;
//           });
//           const json = JSON.stringify(object);

//           request.send(json);

//           request.addEventListener('load', () => {
//               if (request.status === 200) {
//                   console.log(request.response);
//                   showThanksModal(message.success);
//                   form.reset();
//                   statusMessage.remove();
//               } else {
//                   showThanksModal(message.failure);
//               }
//           });
//       });
//     }

//     function showThanksModal(message) {
//       const prevModalDialog = document.querySelector('.modal__dialog');

//       prevModalDialog.classList.add('hide');
//       openModal();

//       const thanksModal = document.createElement('div');
//       thanksModal.classList.add('.modal__dialog');
//       thanksModal.innerHTML = `
//           <div class="modal__content">
//             <div class="modal__close" data-close>x</div>
//             <div class="modal__title">${message}</div>
//           </div>
//       `;

//       document.querySelector('.modal').append(thanksModal);
//       setTimeout(() => {
//         thanksModal.remove();
//         prevModalDialog.classList.add('show');
//         prevModalDialog.classList.remove('hide');
//         closeModal();
//       }, 4000);
//     }

// });




// module1-task92 Rest operator ES6

// оператор ...rest возвращает массив неиспользованных параметров

// const log = function(a, b, ...rest) { // записывается всегда последним начинается с трех точек
//   console.log(a, b, rest);
// }

// log('basic', 'rest', 'operator', 'usage');

// function calcOrDouble(number, basis) {
//  console.log(number * basis);
// }

// calcOrDouble(3, 5); // если не указать второй аргумент будет ошибка

// function calcOrDouble(number, basis) {
//   basis = basis || 2;
//   console.log(number * basis);
//  }
 
//  calcOrDouble(3); // решение до стандарта ES6, при ложном basis подставляется первая правда то есть 2

// function calcOrDouble(number, basis = 2) {
//   console.log(number * basis);
//  }
 
//  calcOrDouble(3, 5); // со стандарта ES6 можно задать параметр по умолчанию прямо в строке с параметрами



// module1-task93 ClassList и делегирование событий

// const btns = document.querySelectorAll('button');

// console.log(btns[0].classList.item(0)); // метод позволяет добыть класс по порядку
// console.log(btns[0].classList.add('red')); // метод позволяет довавить класс, можно и больше через запятую
// console.log(btns[0].classList.remove('blue')); // метод позволяет удалить класс
// console.log(btns[0].classList.toggle('blue')); // метод позволяет тогглить классы, если он есть удалить если его нет то добавить

// if (btns[1].classList.contains('red')) { // метод проверяет на наличие класса
//   console.log('red');
// }

// btns[0].addEventListener('click', () => {

//   // if (!btns[1].classList.contains('red')) {
//   //   btns[1].classList.add('red');
//   // } else {
//   //   btns[1].classList.remove('red');
//   // }

//   btns[1].classList.toggle('red');
// });

// console.log(btns[0].className); // свойство устарело, не рекомендовано к использованию


// делегирование событий

// const btns = document.querySelectorAll('button'),
//       wrapper = document.querySelector('.btn-block');

// wrapper.addEventListener('click', (event) => {
//   if (event.target && event.target.tagName === "BUTTON") { // делегирование событий через родителя
//     console.log('hello');
//   }
// });

// wrapper.addEventListener('click', (event) => {
//   if (event.target && event.target.matches("button.red")) { // делегирование событий через родителя, но с проверкой условия через метод matches
//     console.log('hello');
//   }
// });

// btns.forEach(btn => {
//   btn.addEventListener('click', () => { // по сути то же самое но через перебор, не делегирование событий
//     console.log('hello');
//   });
// })

// const btn = document.createElement('button');
// btn.classList.add('red');
// wrapper.append(btn);



// module1-task94 make Tabs in the new project

// window.addEventListener('DOMContentLoaded', () => { // глобальный обработчик событий поставленный на обьект window

//   const tabs = document.querySelectorAll('.tabheader__item'), // переменная для самих табов на которые будет кликать пользователь
//         tabsContent = document.querySelectorAll('.tabcontent'), // переменная для контента/табов
//         tabsParent = document.querySelector('.tabheader__item'); // переменная для родителя чтобы управлять потомками через делегирование событий
  
//   function hideTabContent() { // функция для скритыя лишних табов
//     tabsContent.forEach(item => { // перебор превдомассива табов через forEach
//       item.style.display = 'none'; // скрываем стили через inline стили
//     });
    
//     tabs.forEach(item => { // внутри функции удаляеми у всех табов класс active
//       // item.classList.add('hide'); // те же решения только через добавление классов а не через inline стили
//       // item.classList.remove('show', 'fade'); // также удаляем класс для анимации
//       item.classList.remove('tabheader__item-active'); // с помощью метода remove
//     });
//   }

//   function showTabContent(i = 0) { // функция для показа таба с аргументом i/номером по порядку
//     // tabsContent[i].classList.add('show', 'fade'); // также добавляем класс для анимации
//     // tabsContent[i].classList.remove('hide'); // то же самое только через добавление классов к элементу а не через inline стили
//     tabsContent[i].style.display = 'block'; // показываем таб с помощью display block
//     tabs[i].classList.add('tabheader__item-active'); // добавляем класс active с помощью add
//   }

//   hideTabContent(); // вызов функции для скрытия всех табов
//   showTabContent(); // вызов функции для показа первого таба с параметром 0, или с параметром по умолчания указанным внутри самой функции

//   tabsParent.addEventListener('click', (event) => { // повесили обработчик события на родителя с аргументом обьекта события event
//     const target = event.target; // создаем переменную для event.target для упрощения себе же, не нужно писать каждый раз event.target

//     if (target && target.classList.contains('tabheader__item')) { // условие для проверки клика по tabheader__item
//       tabs.forEach((item, i) => { // перебор для псевдомассива с целью определить куда кликнул пользователь, аргумент item и i это элемент на который кликнул пользователь и его номер по порядку
//         if (target == item) { // условие для проверки совпадения обьекта события и элемента на который кликнул пользователь 
//           hideTabContent(); // вызов функции для скрытия всех табов
//           showTabContent(i); // вызов функции для показа таба на который кликнул пользователь с параметром i/номер по порядку
//         }
//       });
//     }
//   });
// });




// module1-task95 setTimeout and setInterval

// const timerId = setTimeout(function(text) { // создаем переменную, принимает ту функцию которая должна будет сработать через определенный промежуток времени
//   console.log(text);
// }, 2000, 'Hello'); // второй аргумент устанавливает время задержки выполнения функции в миллисекундах и передает параметр аргумента указанного выше 


// const timerId = setTimeout(logger, 2000); // второй вариант это передача уже существующей функции как аргумент без вызова самой функции

// clearInterval(timerId); // очищает/останавливает интервал после вызова

// function logger() { // передаем в setTimeout с задержкой в 2000 миллисекунд
//   console.log('text')
// }


// const btn = document.querySelector('.btn');

// btn.addEventListener('click', () => {
//   const timerId = setTimeout(logger, 2000); // переменная timerId создается локально, код вне обработчика за нее не вкурсе
// });


// btn.addEventListener('click', () => {
//   const timerId = setInterval(logger, 2000); // setInterval устанавливает интервал к выполнению через каждый указанный промежуток времени
// });

// clearInterval(timerId); // не сработает так как будет работать с undefined, рабочий пример ниже

// для использования переменных внутри обработчиков нужно создать глобальную переменную timerId

// const btn = document.querySelector('.btn');
// let timerId,
//     i = 0;

// btn.addEventListener('click', () => {
//   timerId = setInterval(logger, 2000);
// });

// function logger() {
//   if (i === 3) { // условие проверяет исполнение интервала в данном количестве
//     clearInterval(timerId);
//   }
//   console.log('text');
//   i++; // после каждого исполнения увеличивает i на единичку, как только дойдет до 4 интервал остановится
// }


// let id = setTimeout(function log() { // рекурсивный таймер, то есть таймер в таймере
//   console.log('Hello');
//   id = setTimeout(log, 500);
// }, 500);




// const btn = document.querySelector('.btn'); // находим элемент на странице
// let timerId, // создается для сохранения идентификатора таймера(нужно чтобы остановить анимацию)
//     i = 0;

// function myAnimation() { // сама анимация
//   const elem = document.querySelector('.box'); // находим элемент с классом box который и будем анимировать
//   let pos = 0; // переменная pos отслеживает позицию элемента которая будет менятся в ходе анимации

//   const id = setInterval(frame, 10); // запуск таймера setInterval, который будет запускать функцию frame каждые 10 миллисекунд
//   function frame() { // функция frame/сама анимация
//     if (pos == 300) { // проверка условием, когда pos достигнет значения 300 таймер остановится с помощью clearInterval(id) 
//       clearInterval(id);
//     } else {
//       pos++; // каждый раз при вызове frame, pos увеличивается на одиницу, то есть pos++
//       elem.style.top = pos + "px"; // элемент смещается вниз изменением значения top
//       elem.style.left = pos + "px"; // элемент смещается вправо изменением значения left
//     }
//   }
// }

// btn.addEventListener('click', myAnimation); // создает обработчик на кнопке btn, когда пользователь нажимает на нее происходит вызов функции myAnimation

// суть кода
// пользователь клацает на кнопку с классом btn
// запускается функция myAnimation
// в этой функции:
  // выбирается элемент с классом box
  // стартует анимация с помощью setInterval, которая:
    // увеличивает значение pos
    // смещает єлемент box на новую позицию изменением значений свойств top и left
  // когда элемент достигает позиции 300px по top и left, таймер останавливается






// module1-task96 сборщик мусора и утечки памяти

// первый случай
// если не стоит "use strict" то создается лишняя глобальная переменная даже без обявления

// function func() {
//   smth = 'string';
// }  // в движке такой будет выглядеть как window.smth = 'string' / то есть создастся глобальная переменная
// // такая переменная не может быть удалена сборщиком мусора


// //второй случай / забытые таймеры, хранят ссылки на обьект работы

// const someRes = getData();
// const node = document.querySelector('class'); // даже если удалить оба обьевления ссылка останется

// setInterval(function() { // внутри интервала остается ссылка и на данные и на ноду
//   if (node) {
//     node.innerHTML = someRes;
//   }
// }, 1000)


// // третий случай / обработчики событий на не существующих элементах
// // раньше приводило в утечкам памяти / современные сборщики будут удалять обработчики если элемент удален


// // четвертый случай / замыкания

// function outer() {
//   const potentiallyHugeArray = [];
//   return function inner() {
//     potentiallyHugeArray.push('Hello');
//     console.log('Hello!!');
//   }
// }

// const sayHello = outer();


// // пятый случай / ссылки на Дом элементы

// // function createElement() {
// //   const div = document.createElement('div');
// //   div.id = 'test';
// //   return div;
// // }

// // const testDiv = createElement();

// // document.body.append(testDiv);

// // function deleteElement() {
// //   document.body.removeChild(document.getElementById('test'));
// // }

// // deleteElement();

// // deleteElement ориентируется на Дом, удаляет просто из Дом дерева, в JS переменная остается


// function createElement() { // после завершения работы функции переменные будут удалены
//   const div = document.createElement('div');
//   div.id = 'test';
//   document.body.append(testDiv);
// }

// createElement();

// function deleteElement() {
//   document.body.removeChild(document.getElementById('test'));
// }

// deleteElement();

// правильное решение




// module1-task97 WeakMap and WeakSet

// let user = {
//   name: 'Ivan'
// };

// // const arr = [user]; // в массив передастся обьект по ссылочной системе

// let map = new Map();
// map.set(user, 'data');

// user = null; // обьект удалится из памяти так как он больше не нужен, он обнулен

// console.log(user); // вывод null так как обьект обнулен
// // console.log(arr[0]); // вывод обьекта user так как он до сих пор в памяти из за ссылки на него
// console.log(map.keys()); // та же ситуация, обьект сохранится в памяти

// в WeakMap ключами могут быть только обьекты, если нет ссылки на обьект и он существует только внутри WeakMap то он может быть удален
// let user = {
//   name: 'Ivan'
// };

// let map = new WeakMap();
// map.set(user, 'data');

// user = null;

// console.log(map.has(user)); // на выходе получаем false так как он обнулился


// // структура WeakMap
// let cache = new WeakMap();

// function cacheUser(user) {
//   if (!cache.has(user)) {
//     cache.set(user, Date.now());
//   }

//   return cache.get(user);
// }

// let lena = {name: 'Elena'};
// let alex = {name: 'Alex'};

// cacheUser(lena);
// cacheUser(alex);

// lena = null;

// console.log(cache.has(lena));
// console.log(cache.has(alex));


// // структура WeakSet
// // add, has, delete, не существует метода get
// let messages = [
//   {text: 'Hello', from: 'John'},
//   {text: 'World', from: 'Alex'},
//   {text: '....', from: 'M'}  
// ];

// let readMessages = new WeakSet();

// readMessages.add(messages[0]);
// readMessages.add(messages[1]);

// messages.shift();
// console.log(readMessages.has(messages[0]));





// module1-task98 работа с датами

// const now = new Date('2024-12-30'); // можно передавать аргументы, числа до 10-го передаются без нуля

// console.log(now);

// const now = new Data();

// получение компонентов даты

// console.log(now.getFullYear()); // вывод 2024

// console.log(now.getMonth()); // вывод 12

// console.log(now.getDate()); // вывод 30

// console.log(now.getDay()); // вывод 1 начинается с воскресенья

// console.log(now.getTimezoneOffset()); // разница между часовым поясом и UTC

// getHours(), getSeconds(), getMilliseconds()

// методы геттеры/получатели


// console.log(now.setHours(18)); // установка времени

// почти все работают так же просто вместо get пишем set

// методы постеры/отправители


// let start = new Data();

// for (let i = 0; i < 100000; i++) {
//   let some = i ** 3;
// }

// let end = new Date();

// alert(`цикл отработал за ${end - start} миллисекунд`);



// module1-task99 создаем таймер обратного отсчета на сайте

// const deadline =  '2020-05-11'; // переменная хранит строку с датой до которой будет отсчитываться время

// function getTimeRemaining(endtime) { // функция для вычисления разницы между текущим времеменем и переданной конечной датой (endtime)
//   const t = Date.parse(endtime) - Date.parse(new Date()), // преобразует строку с конечной датой и текущую дату в миллисекунды записывая в t
//         days = Math.floor(t / (1000 * 60 * 60 * 24)), // делим общее количество миллисекунд на количество миллисекунд в одном дне 24 часа
//         hours = Math.floor((t / (1000 * 60 * 60) % 24)), // берем остаток от общего количества часов чтобы получить оставшиеся часы в текущем дне
//         minutes = Math.floor((t / 1000 / 60) % 60), // получаем оставшиеся минуты в текущем часе
//         seconds = Math.floor((t / 1000) % 60); // получаем оставшиеся секунды в текущей минуте

//   return { // возвращает обьект с рассчитаными значениями
//     'total' : t,
//     'days': days,
//     'hours': hours,
//     'minutes': minutes,
//     'seconds': seconds
//   };
// }

// function getZero(num) { // функция для добавления нуля к числам
//   if (num >= 0 && num < 10) {
//     return `0${num}`;
//   } else {
//     return num;
//   }
// }

// function setClock(selector, endtime) { // функция для установки таймера
//   const timer = document.querySelector(selector), // ищет элемент на странице по указанному селектору
//         days = timer.querySelector('#days'), // поиск отдельных частей таймера
//         hours = timer.querySelector('#hours'), // поиск отдельных частей таймера
//         minutes = timer.querySelector('#minutes'), // поиск отдельных частей таймера
//         seconds = timer.querySelector('#seconds'), // поиск отдельных частей таймера
//         timeInterval = setInterval(updateClock, 1000); // устанавливает выполнение таймера updateClock каждые 1000 миллисекунд

//   updateClock(); // начальное обновление для мгновенного отображения таймера
  
//   function updateClock() { // обновление таймера
//     const t = getTimeRemaining(endtime); // вызывает getTimeRemaining для вычисления оставшегося времени, результат сохраняет в t

//     days.innerHTML = getZero(t.days); // вставляет рассчитанные значения в соответсвующие элементы на странице, использует getZero для добавления 0
//     hours.innerHTML = getZero(t.hours); // вставляет рассчитанные значения в соответсвующие элементы на странице, использует getZero для добавления 0
//     minutes.innerHTML = getZero(t.minutes); // вставляет рассчитанные значения в соответсвующие элементы на странице, использует getZero для добавления 0
//     seconds.innerHTML = getZero(t.seconds); // вставляет рассчитанные значения в соответсвующие элементы на странице, использует getZero для добавления 0

//     if (t.total <= 0) { // если общее время t.total меньше или равно 0 таймер останавливается с помощью clearInterval
//       clearInterval(timeInterval);
//     }
//   }
// }

// setClock('.timer', deadline); // запускает таймер для элемента с классом .timer и передает конечную дату (deadline)

// последовательность выполнения

// 1. обьявляется deadline и функции
// 2. вызывается setClock :
    // находятся html-элементы для таймера
    // устанавливается интервал вызова updateClock каждые 1000 миллисекунд
    // первый вызов updateClock происходит сразу
// 3. в updateClock :
    // вызывается etTimeRemaining чтобы рассчитать оставшееся время
    // результаты вставляются в html-элементы
    // если время истекло интервал останавливается
// 4. каждую секунду updateClock повторяется пока время не истечет

// когда t.total становится меньше или равно нулю выполнение останавливается и таймер больше не обновляется






// module1-task100 параметры документа, окна и работа с ними

// const box = document.querySelector('.box'),
//       btn = document.querySelector('button');

// const width = box.clientWidth; // получение ширины без учета padding margin и полосы прокрутки
// const height = box.clientHeight; // получение высоты без учета padding margin и полосы прокрутки

// console.log(width, height);

// const width = box.offsetWidth; // получение ширины с учетом padding margin и полосы прокрутки
// const height = box.offsetHeight; // получение высоты с учетом padding margin и полосы прокрутки

// console.log(width, height);

// const width = box.scrollWidth; // получение ширины без учета полосы прокрутки
// const height = box.scrollHeight; // получение высоты с учетом всей полосы прокрутки то есть высота всего окна с контентом

// console.log(width, height);

// btn.addEventListener('click', () => { // при нажатии на кнопку выдвигается вся высота окна
//   box.style.height = box.scrollHeight + 'px';
// });

// console.log(box.getBoundingClientRect()); // метод получает все границы элемента / выводит все кординаты


// // получение уже примененных стилей из css то есть computed styles

// const style = window.getComputedStyle(box); // метод обьекта window работает с заданным элементом, можно получить и стили псевдо элемента если задать его вторым параметром через запятую

// console.log(style); // большой обьект со всеми стилями
// console.log(style.display); // конкретное свойство





// module1-task101 создаем модальное окно

// для одной модалки методом add remove

// const modalTrigger = document.querySelector('[data-modal]'),
//       modal = document.querySelector('.modal'),
//       modalCloseBtn = document.querySelector('[data-close]');

// modalTrigger.addEventListener('click', () => {
//   modal.classList.add('show');
//   modal.classList.remove('hide');
//   document.body.style.overflow = 'hidden';
// });

// modalCloseBtn.addEventListener('click', () => {
//   modal.classList.add('hide');
//   modal.classList.remove('show');
//   document.body.style.overflow = '';
// });


// вариант с toggle

// const modalTrigger = document.querySelector('[data-modal]'),
//       modal = document.querySelector('.modal'),
//       modalCloseBtn = document.querySelector('[data-close]');

// modalTrigger.addEventListener('click', () {
//   modal.classList.toggle('show');
//   document.body.overflow = 'hidden';
// });

// modalCloseBtn.addEventListener('click', () {
//   modal.classList.toggle('show');
//   document.body.style.overflow = '';
// });


// для всех кнопок через перебор псевдомассива

// const modalTrigger = document.querySelectorAll('[data-modal]'),
//       modal = document.querySelector('.modal'),
//       modalCloseBtn = document.querySelector('[data-close]');

// modalTrigger.forEach(btn => {
//     btn.addEventListener('click', () => {
//     modal.classList.add('show');
//     modal.classList.remove('hide');
//     document.body.style.overflow = 'hidden';
//   });
// });

// modalCloseBtn.addEventListener('click', () => {
//   modal.classList.add('hide');
//   modal.classList.remove('show');
//   document.body.style.overflow = '';
// });


// закрытия модалки при клике на подложку

// const modalTrigger = document.querySelectorAll('[data-modal]'),
//       modal = document.querySelector('.modal'),
//       modalCloseBtn = document.querySelector('[data-close]');

// modalTrigger.forEach(btn => {
//     btn.addEventListener('click', () => {
//     modal.classList.add('show');
//     modal.classList.remove('hide');
//     document.body.style.overflow = 'hidden';
//   });
// });

// function closeModal() { // функция для dont repeat yourserf
//   modal.classList.add('hide');
//   modal.classList.remove('show');
//   document.body.style.overflow = '';
// }

// modalCloseBtn.addEventListener('click', closeModal);

// modal.addEventListener('click', (e) => {
//   if (e.target === modal) {
//     closeModal();
//   }
// });

// document.addEventListener('keydown', (e) => { // для закрытия модалки с помощью esc
//   if (e.code === "Escape" && modal.classList.contains('show')) {
//     closeModal();
//   }
// });





// module1-task102 модификация модального окна

// const modalTrigger = document.querySelectorAll('[data-modal]'), 
//       modal = document.querySelector('.modal'),
//       modalCloseBtn = document.querySelector('[data-close]');

// function openModal() {
//   modal.classList.add('show');
//   modal.classList.remove('hide');
//   document.body.style.overflow = 'hidden';
//   clearInterval(modalTimerId);
// }

// modalTrigger.forEach(btn => {
//   btn.addEventListener('click', openModal);
// });

// function closeModal() {
//   modal.classList.add('hide');
//   modal.classList.remove('show');
//   document.body.style.overflow = '';
// }

// modalCloseBtn.addEventListener('click', closeModal);

// modal.addEventListener('click', (e) => {
//   if (e.target === modal) {
//     closeModal();
//   }
// });

// document.addEventListener('keydown', (e) => {
//   if (e.code === "Escape" && modal.classList.contains('show')) {
//     closeModal();
//   }
// });

// const modalTimerId = setTimeout(openModal, 5000);

// function showModalByScroll() {
//   if (window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
//     openModal();
//     window.removeEventListener('scroll', showModalByScroll);
//   }
// }

// window.addEventListener('scroll', showModalByScroll);




// module1-task103 MutationObserver, ResizeObserver and contenteditable

// const box = document.querySelector('.box');

// let observer = new MutationObserver(mutationRecords => {
//   console.log(mutationRecords);
// });

// observer.observe(box, {
//   childList: true
// })

// observer.disconnect();




// module1-task104 функции конструкторы

// функция по своей сути является обьектом

// const num = new Number(); // создание обьекта Number

// const func = new Function(); // то же самое можно и с функцией

// но основе стандарта ES5, в стандарте ES6 используются классы
// function User(name, id) { // функция конструктор, предназначены для создания обьектов
//   this.name = name;
//   this.id = id;
//   this.human = true;
//   this.hello = function() { // также принимает создание методов внутри конструктора
//     console.log(`Hello ${this.name}`);
//   };
// }

// User.prototype.exit = function(name) {
//   console.log(`User ${this.name} is go`);
// };

// const ivan = new User('Ivan', 28);
// const alex = new User('Alex', 20);

// ivan.exit();

// ivan.hello();
// alex.hello();

// console.log(ivan);
// console.log(alex);

// конструкторы нужны для создания новых однотипных обьектов




// module1-task105  контекст вызова this

// контекст вызова функции

// функция может вызываться 4 способами
// function showThis(a, b) { // в этом виде this ссылается на обьект window
//   console.log(this);
//   function sum() {
//     console.log(this); // undefined
//     return this.a + this.b;
//   }

//   console.log(sum());
// }
// showThis(4, 5);

// function showThis(a, b) {
//   console.log(this);
//   function sum() {
//     console.log(this); // для решения убираем this ниже используя замыкание
//     return a + b;
//   }

//   console.log(sum());
// }
// showThis(4, 5);

// // 1) обычная функция: this = window, но если стоит use strict = undefined

// const obj = {
//   a: 20,
//   b: 15,
//   sum: function() {
//     function shout() {
//       console.log(this);
//     }
//     shout();
//   }
// }

// obj.sum();

// // 2) контекст у методов обьекта - сам обьект

// function User(name, id) {
//   this.name = name;
//   this.id = id;
//   this.human = true;
//   this.hello = function() {
//     console.log('Hello! ' + this.name);
//   };
// }

// let ivan = new User('Ivan', 23);

// // 3) this в конструкторах и классах - это новый экземпляр обьекта

// function sayName(surname) {
//   console.log(this);
//   console.log(this.name + surname);
// }

// const user = {
//   name: 'John'
// };

// sayName.call(user, 'Smith'); // аргументы передаются через запятую
// sayName.apply(user, ['Smith']); // аргументы передаются через массив

// function count(num) {
//   return this * num;
// }

// const double = count.bind(2);
// console.log(double(3));

// 4) ручная привязка this: call, apply, bind


// const btn = document.querySelector('button');

// btn.addEventListener('click', function() {
//   console.log(this); // при вызове обычной функции контекстом вызова будет сам элемент на котором произошло событие
// });

// btn.addEventListener('click', () => {
//   console.log(this); // при вызове стрелочной функции контекст вызова теряется this = undefined
// });


// const obj = {
//   num: 5,
//   sayNumber: function() {
//     const say = () => { // у стрелочных функций нет контекста вызова, всегда ссылается на родителя
//       console.log(this);
//     };

//     say();
//   }
// };

// obj.sayNumber();


// const double = (a) => {
//   return a * 2;
// };

// const double = a => a * 2; // укороченная версия, делает то же самое




// module1-task106 классы ES6

// классы это красивые обертки для функций конструкторов
// нужны для упрощения шаблонизации

// class Rectangle { //создание классы
//   constructor(height, width) { // в конструктор передаются параметры нужные при использовании
//     this.height = height; // this ссылается на созданный обьект внутри события constructor
//     this.width = width; // тоже самое только со свойством height
//   }

//   calcArea() { // создание метода класса
//     return this.height * this.width; // возвращение выполнения метода
//   }
// }

// class ColoredRectangleWithText extends Rectangle{ // создание нового класса с наследованием свойств от класса Rectangle
//   constructor(height, width, text, bgColor) { // выбор параметров конструктора нужных из класса Rectangle также добавление новых нужных для ColoredRectangleWithText
//     super(height, width); // методом super() запускается наследование параметров из класса Rectangle
//     this.text = text; // this опять же ссылается на новосозданный обьект, присваеваем значения
//     this.bgColor = bgColor; // this опять же ссылается на новосозданный обьект, присваеваем значения
//   }

//   showMyProps() { // создание метода класса ColoredRectangleWithText, showMyProps()
//     console.log(`text: ${this.text}, color: ${this.bgColor}`); // метод выводит в консоль созданные значения для проверки работы класса
//   }
// }

// const div = new ColoredRectangleWithText(25, 10, 'Hello World', 'red'); // создание нового обьекта/элемента div с использованием класса ColoredRectangleWithText

// div.showMyProps(); // испозование метода showMyProps для показа значений использованных при создании div
// console.log(div.calcArea()); // вывод в консоль результат выполнения метода calcArea() созданном в Rectangle

// const square = new Rectangle(10, 10); // создание квадрата с использованием класса Rectangle, аргументы width height
// const long = new Rectangle(20, 100); // создание прямоугольника с использованием класса Rectangle, аргументы width height

// console.log(long.calcArea()); // использования метода класса Rectangle для вычисления площади прямоугольника calcArea()
// console.log(square.calcArea()); // использование метода класса Rectangle для вычисления площади квадрата calcArea()





// module1-task107 используем классы в реальной работе

// использование классов для карточек

// class MenuCard {
//   constructor(src, alt, title, descr, price, parentSelector) {
//     this.src = src;
//     this.alt = alt;
//     this.title = title;
//     this.descr = descr;
//     this.price = price;
//     this.parent = document.querySelector(parentSelector);
//     this.trasfer = 27;
//     this.changeToUah();
//   }

//   changeToUah() {
//     this.price = this.price * this.trasfer;
//   }

//   render() {
//     const element = document.createElement('div');
//     element.innerHTML = `
//       <div class="menu__item">
//         <img src=${this.src} alt=${this.alt}>
//         <h3 class="menu__item-subtitle>${this.title}</h3>
//         <div class="menu__item-descr>${this.descr}</div>
//         <div class="menu__item-divider></div>
//         <div class="menu__item-price>
//           <div class="menu__item-cost">price:</div>
//           <div class="menu__item-total"><span>${this.price}</span> uah/day</div>
//         </div>
//       </div>
//     `;
//     this.parent.append(element);
//   }
// }

// new MenuCard(
//   "img/tabs/vegy.jpg",
//   "vegy",
//   'menu "fitness"',
//   'menu "fitness", its a new way to',
//   9,
//   '.menu .container'
// ).render();





// module1-task108 Rest оператор и его параметры по умолчанию

// const log = function(a, b, ...rest) {
//   console.log(a, b, rest);
// }

// log('basic', 'rest', 'operator', 'usage');

// function calcOrDouble(number, basis = 2) {
//   console.log(number * basis);
// }

// calcOrDouble(3);


// class MenuCard {
//   constructor(src, alt, title, descr, price, parentSelector, ...classes) {
//     this.src = src;
//     this.alt = alt;
//     this.title = title;
//     this.descr = descr;
//     this.price = price;
//     this.classes = classes;
//     this.parent = document.querySelector(parentSelector);
//     this.trasfer = 27;
//     this.changeToUah();
//   }

//   changeToUah() {
//     this.price = this.price * this.trasfer;
//   }

//   render() {
//     const element = document.createElement('div');
    
//     if (this.classes.length === 0) {
//       this.element = 'menu__item';
//       element.classList.add(this.element);
//     } else {
//       this.classes.forEach(className => element.classList.add(className));
//     }

//     element.innerHTML = `
//         <img src=${this.src} alt=${this.alt}>
//         <h3 class="menu__item-subtitle>${this.title}</h3>
//         <div class="menu__item-descr>${this.descr}</div>
//         <div class="menu__item-divider></div>
//         <div class="menu__item-price>
//           <div class="menu__item-cost">price:</div>
//           <div class="menu__item-total"><span>${this.price}</span> uah/day</div>
//         </div>
//     `;
//     this.parent.append(element);
//   }
// }

// new MenuCard(
//   "img/tabs/vegy.jpg",
//   "vegy",
//   'menu "fitness"',
//   'menu "fitness", its a new way to',
//   9,
//   '.menu .container',
// ).render();





// module1-task109 JSON формат передачи данных, глубокое копирование обьектов

// const persone = {
//   name: 'Alex',
//   tel: '+7444444'
// };

// console.log(JSON.stringify(persone)); // метод stringify трансформирует обьект JS в обьект JSON, такой обьект можно отправить на сервер

// console.log(JSON.parse(JSON.stringify(persone))); // метод parse трансформирует обьект JSON в обьект JS

// глубокое копирование

// const persone = {
//   name: 'Alex',
//   tel: '+7444444',
//   parents: {
//     mom: 'Olga',
//     dad: 'Mike'
//   }
// };

// const clone = JSON.parse(JSON.stringify(persone)); // будет сделана полностью независимая глубокая копия обекта persone
// clone.parents.mom = 'Ann';
// console.log(persone); // в данном случае ничего не изменится, значение свойства mom останется Olga
// console.log(clone); // здесь же значение свойства mom будет Ann





// module1-task110 AJAX и общение с сервером


// const inputRub = document.querySelector('#rub'),
//       inputUsd = document.querySelector('#usd');

// inputRub.addEventListener('input', () => {
//   const request = new XMLHttpRequest();

//   request.open('GET', 'js/current.json'); // метод open() принимает аргументы method url async login pass
//   request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
//   request.send();

//   request.addEventListener('readystatechange', () => {
//     if (request.status === 200) {
//       console.log(request.response);
//       const data = JSON.parse(request.response);
//       inputUsd.value = (+inputRub.value / data.current.usd).toFixed;
//     } else {
//       inputUsd.value = 'something went wrong';
//     }
//   });

//   // status
//   // statusText
//   // response
//   // readyState
// });





// module1-task111 реализация скрипта отправки данных на сервер

// forms

// const forms = document.querySelectorAll('form'); // сбор всех форм на странице

// const message = { // обьект с сообщениями для оповещения пользователя про статус запроса
//   loading: 'loading',
//   success: 'success',
//   failure: 'failure'
// };

// forms.forEach(item => { // перебор всех форм с последующим запуском функции postData на каждой из них
//   postData(item);
// });

// function postData(form) { // функция postData с параметром form
//   form.addEventListener('submit', (e) => { // обработчик событий следит за подтверждением отправки форм
//     e.preventDefault(); // обнуление стандартного поведения для предотвращения перезагрузки страницы при отправке формы

//     const statusMessage = document.createElement('div'); // создание элемента для оповещения пользователя
//     statusMessage.classList.add('status'); // добавление класса, если такой имеется
//     statusMessage.textContent = message.loading; // добавление самого сообщения для оповещения
//     form.append(statusMessage); // добавление элемента в блок формы

//     const request = new XMLHttpRequest(); // создание обьекта отправки данных в переменной request
//     request.open('POST', 'server.php'); // метод open() обьекта отправки данных 
//     // request.setRequestHeader('Content-type', 'multipart/form-data'); при использовании HttpRequest в паре с FormData заголовок устанавливать не нужно
//     request.setRequestHeader('Content-type', 'application/json'); // заголовок в случае передачи данных в формате JSON
//     const formData = new FormData(form); // создание обьекта FormData в переменной formData

//     const object = {}; // пустой обьект для сохранения ключей формы
//     formData.forEach(function(value, key) { // перебор ключей в обьекте formData с последующей записью их в пустой обьект object
//       object[key] = value;
//     });

//     const json = JSON.stringify(object); // перевод обьекта в формат json

//     request.send(json); // отправка данных в формате json

//     request.addEventListener('load', () => { // назначение обработчика событий при отправке данных
//       if (request.status === 200) { // при успешной отправке:
//         console.log(request.response); // выводится ответ в консоль
//         statusMessage.textContent = message.success; // выводится сообщение для оповещения пользователя
//         form.reset(); // обнуление формы
//         setTimeout(() => { // запуск таймера для:
//           statusMessage.remove(); // удаления сообщения о статусе выполнения
//         }, 2000); // через 2 секунды
//       } else {
//         statusMessage.textContent = message.failure; // при ином исходе то есть при статусе 404 и тд. вывод сообщения об ошибке для пользователя
//       }
//     });
//   });
// }






// module1-task112 красивое оповещение пользователя

// const forms = document.querySelectorAll('form'); // сбор всех форм на странице

// const message = { // обьект с сообщениями для оповещения пользователя про статус запроса
//   loading: 'img/form/spinner.svg', // вместо обычного сообщения о загрузке берем спинер
//   success: 'success',
//   failure: 'failure'
// };

// forms.forEach(item => { // перебор всех форм с последующим запуском функции postData на каждой из них
//   postData(item);
// });

// function postData(form) { // функция postData с параметром form
//   form.addEventListener('submit', (e) => { // обработчик событий следит за подтверждением отправки форм
//     e.preventDefault(); // обнуление стандартного поведения для предотвращения перезагрузки страницы при отправке формы

//     const statusMessage = document.createElement('img'); // создаем элемент img для спинера
//     statusMessage.src = message.loading; // передача пути для создания спинера
//     statusMessage.style.cssText = `
//       display: block;
//       margin: 0 auto;
//     `; // стили для центровки спинера
//     form.insertAdjacentElement('afterend', statusMessage); // метод insertAdjacentElement() с аргументами куда и что помещать в форму, по сути тот же append() только с аргументами

//     const request = new XMLHttpRequest(); // создание обьекта отправки данных в переменной request
//     request.open('POST', 'server.php'); // метод open() обьекта отправки данных 
//     // request.setRequestHeader('Content-type', 'multipart/form-data'); при использовании HttpRequest в паре с FormData заголовок устанавливать не нужно
//     request.setRequestHeader('Content-type', 'application/json'); // заголовок в случае передачи данных в формате JSON
//     const formData = new FormData(form); // создание обьекта FormData в переменной formData

//     const object = {}; // пустой обьект для сохранения ключей формы
//     formData.forEach(function(value, key) { // перебор ключей в обьекте formData с последующей записью их в пустой обьект object
//       object[key] = value;
//     });

//     const json = JSON.stringify(object); // перевод обьекта в формат json

//     request.send(json); // отправка данных в формате json

//     request.addEventListener('load', () => { // назначение обработчика событий при отправке данных
//       if (request.status === 200) { // при успешной отправке:
//         console.log(request.response); // выводится ответ в консоль
//         showThanksModal(message.success); // вызов функции showThanksModal для оповещения пользователя
//         form.reset(); // обнуление формы
//         statusMessage.remove(); // удаления сообщения о статусе выполнения
//       } else {
//         showThanksModal(message.failure); // вызов функции showThanksModal для оповещения об ошибке
//       }
//     });
//   });
// }

// function showThanksModal(message) { // создание функции showThanksModal с параметром обьекта message
//   const prevModalDialog = document.querySelector('.modal__dialog'); // сохранение элемента для блока оповещения в переменной prevModalDialog

//   prevModalDialog.classList.add('hide'); // начальное скрытие элемента добавлением класса
//   openModal(); // вызов функции openModal

//   const thanksModal = document.createElement('div'); // создание элемента для блока оповещения
//   thanksModal.classList.add('modal__dialog'); // добавление класса для блока оповещения
//   thanksModal.innerHTML = `
//     <div class="modal__content">
//       <div class="modal__close" data-close>x</div>
//       <div class="modal__title">${message}</div>
//     </div>
//   `; // структура для блока оповещения

//   document.querySelector('.modal').append(thanksModal); // добавление блока thanksModal в блок modal
//   setTimeout(() => { // создание таймера на элементе
//     thanksModal.remove(); // удаление элемента thanksModal для замены его на блок оповещения
//     prevModalDialog.classList.add('show'); // добавление класса для показа блоку с оповещением
//     prevModalDialog.classList.remove('hide'); // удаление класса для скрытия блока с оповещением
//     closeModal(); // закрытие окна
//   }, 4000); // через 4 секунды 
// }





// module1-task113 Promise(ES6)

// пример дерева коллбэков/callback hell

// console.log('запрос данных..'); // вывод в консоль..

// setTimeout(() => { // создание таймера с коллбэк функцией
//   console.log('подготовка данных..'); // вывод в консоль

//   const product = { // создание обьекта описания продукта
//     name: 'TV', // имя
//     price: 2000 // цена
//   };

//   setTimeout(() => { // создание второго таймера с коллбэк функцией
//     product.status = 'order'; // добавление свойства status обьекту product со значением order
//     console.log(product); // вывод в консоль обьекта product
//   }, 2000); // сроком на 2 секунды
// }, 2000); // сроком на 2 секунды

// для того чтобы не делать дерево коллбэков как раз и нужны Promise

// resolve - пример

// console.log('запрос данных..');

// const req = new Promise(function(resolve, reject) { // создания обещания/Promise в переменной req, всегда принимает два аргумента resolve, reject
//   setTimeout(() => { // создание таймера для симуляции ассинхронного выполнения
//     console.log('подготовка данных..'); // вывод в консоль

//     const product = { // создание обьекта
//       name: 'TV',
//       price: 2000
//     };

//     resolve(product); // возвращение обьекта product внутри коллбэк функции resolve
//   }, 2000); // сроком на 2 секунды
// });

// req.then((product) => { // вызов метода then обьекта promise в переменной req
//   return new Promise((resolve, reject) => { // возвращение нового promise
//     setTimeout(() => { // создание таймера
//       product.status = 'order'; // добавление нового свойства
//       resolve(product); // вызов функции resolve с аргументом product
//     }, 2000); // сроком на 2 секунды
//   });
// }).then(data => { // вызов метода then с параметром data
//   data.modify = true; // добавление свойства 
//   return data; // возвращение data
// }).then(data => { // снова вызов метода then с параметром data
//   console.log(data); // вывод data в консоль
// });


// reject - пример

// console.log('запрос данных..');

// const req = new Promise(function(resolve, reject) { // создания обещания/Promise, всегда принимает два аргумента resolve, reject
//   setTimeout(() => {
//     console.log('подготовка данных..');

//     const product = {
//       name: 'TV',
//       price: 2000
//     };

//     resolve(product);
//   }, 2000);
// });

// req.then((product) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       product.status = 'order';
//       reject();
//     }, 2000);
//   });
// }).then(data => {
//   data.modify = true;
//   return data;
// }).then(data => {
//   console.log(data);
// }).catch(() => {
//   console.error('произошла ошибка');
// });


// finally

// console.log('запрос данных..');

// const req = new Promise(function(resolve, reject) { // создания обещания/Promise, всегда принимает два аргумента resolve, reject
//   setTimeout(() => {
//     console.log('подготовка данных..');

//     const product = {
//       name: 'TV',
//       price: 2000
//     };

//     resolve(product);
//   }, 2000);
// });

// req.then((product) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       product.status = 'order';
//       resolve(product);
//     }, 2000);
//   });
// }).then(data => {
//   data.modify = true;
//   return data;
// }).then(data => {
//   console.log(data);
// }).catch(() => {
//   console.error('произошла ошибка');
// }).finally(() => {
//   console.log('finally');
// });


// all, race

// const test = time => {
//   return new Promise(resolve => {
//     setTimeout(() => resolve(), time);
//   });
// };

// // test(1000).then(() => console.log('1000 ms'));
// // test(2000).then(() => console.log('2000 ms'));

// // Promise.all([test(1000), test(2000)]).then(() => {
// //   console.log('All');
// // });

// Promise.race([test(1000), test(2000)]).then(() => {
//   console.log('All');
// });





// module1-task114 Fetch API

// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: "POST",
//   body: JSON.stringify({name: 'Alex'}),
//   headers: {
//     'Content-type': 'application/json'
//   }
// })
//   .then(response => response.json())
//   .then(json => console.log(json));

// перепись функционала под fetch api

// const forms = document.querySelectorAll('form'); // сбор всех форм на странице

// const message = { // обьект с сообщениями для оповещения пользователя про статус запроса
//   loading: 'img/form/spinner.svg', // вместо обычного сообщения о загрузке берем спинер
//   success: 'success',
//   failure: 'failure'
// };

// forms.forEach(item => { // перебор всех форм с последующим запуском функции postData на каждой из них
//   postData(item);
// });

// function postData(form) { // функция postData с параметром form
//   form.addEventListener('submit', (e) => { // обработчик событий следит за подтверждением отправки форм
//     e.preventDefault(); // обнуление стандартного поведения для предотвращения перезагрузки страницы при отправке формы

//     const statusMessage = document.createElement('img'); // создаем элемент img для спинера
//     statusMessage.src = message.loading; // передача пути для создания спинера
//     statusMessage.style.cssText = `
//       display: block;
//       margin: 0 auto;
//     `; // стили для центровки спинера
//     form.insertAdjacentElement('afterend', statusMessage); // метод insertAdjacentElement() с аргументами куда и что помещать в форму, по сути тот же append() только с аргументами

//     const formData = new FormData(form); // создание обьекта FormData в переменной formData

//     const object = {}; // пустой обьект для сохранения ключей формы
//     formData.forEach(function(value, key) { // перебор ключей в обьекте formData с последующей записью их в пустой обьект object
//       object[key] = value;
//     });

//     fetch('server.php', {
//       method: "POST",
//       headers: {
//         'Content-type': 'application/json'
//       },
//       body: JSON.stringify(object)
//     })
//     .then(data => data.text())
//     .then(data => {
//         console.log(data); // выводится data в консоль
//         showThanksModal(message.success); // вызов функции showThanksModal для оповещения пользователя
//         statusMessage.remove(); // удаления сообщения о статусе выполнения
//     })
//     .catch(() => {
//       showThanksModal(message.failure); // вызов функции showThanksModal для оповещения об ошибке
//     })
//     .finally(() => {
//       form.reset(); // очистка формы
//     });

//   });
// }

// function showThanksModal(message) { // создание функции showThanksModal с параметром обьекта message
//   const prevModalDialog = document.querySelector('.modal__dialog'); // сохранение элемента для блока оповещения в переменной prevModalDialog

//   prevModalDialog.classList.add('hide'); // начальное скрытие элемента добавлением класса
//   openModal(); // вызов функции openModal

//   const thanksModal = document.createElement('div'); // создание элемента для блока оповещения
//   thanksModal.classList.add('modal__dialog'); // добавление класса для блока оповещения
//   thanksModal.innerHTML = `
//     <div class="modal__content">
//       <div class="modal__close" data-close>x</div>
//       <div class="modal__title">${message}</div>
//     </div>
//   `; // структура для блока оповещения

//   document.querySelector('.modal').append(thanksModal); // добавление блока thanksModal в блок modal
//   setTimeout(() => { // создание таймера на элементе
//     thanksModal.remove(); // удаление элемента thanksModal для замены его на блок оповещения
//     prevModalDialog.classList.add('show'); // добавление класса для показа блоку с оповещением
//     prevModalDialog.classList.remove('hide'); // удаление класса для скрытия блока с оповещением
//     closeModal(); // закрытие окна
//   }, 4000); // через 4 секунды 
// }


// задача 1
// function wait(ms) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`прошло ${ms} миллисекунд`);
//     }, ms)
//   })
// }

// wait(2000).then(() => console.log('прошло 2000 миллисекунд'));

// // задача 2
// function checkPassword(password) {
//   return new Promise((resolve, reject) => {
//     if (password.length >= 8) {
//       resolve('Пароль подходит');
//     } else {
//       reject('Пароль слишком короткий');
//     }
//   })
// }

// checkPassword('mypassword')
//   .then((message) => console.log(message))
//   .catch((error) => console.log(error));

// // задача 3
// function fetchData(success) {
//   return new Promise((resolve, reject) => { 
//     setTimeout(() => {
//       if (success === true) {
//         resolve([1, 2, 3]);
//       } else {
//         reject('Не удалось загрузить данные');
//       }
//     }, 2000);
//   })
// }

// fetchData(false)
//   .then((data) => console.log('Данные:', data))
//   .catch((error) => console.log('Ошибка:', error));

// // задача 4

// function step1() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('Шаг 1 выполнен');
//     }, 1000);
//   })
// }

// function step2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('Шаг 2 выполнен');
//     }, 2000);
//   })
// }

// function step3() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('Шаг 3 выполнен');
//     }, 1000);
//   })
// }

// step1()
//   .then((message) => {
//     console.log(message);
//     return step2();
//   })
//   .then((message) => {
//     console.log(message);
//     return step3();
//   })
//   .then((message) => {
//     console.log(message);
//   });

// // задача 5

// function loadUser() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({
//         id: 1,
//         name: 'Андрей'
//       })
//     }, 1000);
//   })
// }

// function loadPosts() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve([
//       'Пост 1',
//       'Пост 2'
//       ])
//     }, 2000);
//   })
// }

// function loadComments() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve([
//         'Комментарий 1',
//         'Комментарий 2'
//       ])
//     }, 1500);
//   })
// }

// Promise.all([loadUser(), loadPosts(), loadComments()])
//   .then(([user, posts, comments]) => {
//     console.log('Пользователь:', user);
//     console.log('Посты:', posts);
//     console.log('Комментарии:', comments);
//   });

// // задача 6

// const fastTask = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('Быстрая задача выполнена');
//     }, 1000);
//   });
// };

// const slowTask = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('Медленная задача выполнена');
//     }, 3000);
//   });
// };

// Promise.race([fastTask(), slowTask()])
//   .then((message) => console.log('Первая завершившаяся задача:', message));

// // задача 7

// const simulateError = (shouldFail) => {
//   return new Promise((resolve, reject) => {
//     if (shouldFail === true) {
//       reject('Произошла ошибка');
//     } else {
//       resolve('Все прошло хорошо');
//     }
//   });
// };

// simulateError(false)
//   .then((message) => console.log(message))
//   .catch((error) => console.log(error));

// // задача 8

// const delayedTask = (time) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (time < 3000) {
//         resolve(`Выполнено через ${time} миллисекунд`);
//       } else {
//         reject('Задача слишком долгая');
//       }
//     }, time);
//   })
// };

// delayedTask(3001)
//   .then((message) => console.log(message))
//   .catch((error) => console.log(error));




// module1-task115 методы перебора массивов

// filter - фильтрует элементы внутри массива, 

// const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];

// const shortNames = names.filter(function(name) {
//   return name.length < 5;
// });

// console.log(shortNames);


// map

// const answers = ['IvAn', 'AnnA', 'HellO'];

// const result = answers.map(item => {
//   return item.toLowerCase();
// });

// console.log(result);


// every/some

// const some = [4, 'qwq', 'srhgth'];

// console.log(some.some(item => typeof(item) === 'number'));

// console.log(some.every(item => typeof(item) === 'number'));


// reduce

// const arr = [4, 5, 1, 3, 2, 6];
//                         // 0     4
//                         // 4     5
//                         // 9     1
//                         // 10    3
//                         // 13    2
//                         // 15    6

// const res = arr.reduce((sum, current) => sum + current); // последним аргументом можно добавить начальную сумму, тогда все начнется с данного числа

// console.log(res);

// const arr = ['apple', 'pear', 'plum'];

// const res = arr.reduce((sum, current) => `${sum}, ${current}`);

// console.log(res);


// примеры

// const obj = {
//   ivan: 'persone',
//   ann: 'persone',
//   dog: 'animal',
//   cat: 'animal'
// };

// const newArr = Object.entries(obj) // метод Object.entries() возвращает массив массивов
// .filter(item => item[1] === 'persone') // методом filter возвращается элементы у которых второй элемент/значение равно 'persone'
// .map(item => item[0]); // метод map возвращает только первые элементы/ключи то есть имена

// console.log(newArr);


// задачи по методам массивов #1

// 1) У вас есть список фильмов с рейтингом в виде массива объектов. Напишите функцию showGoodFilms, которая будет принимать этот массив, а возвращать будет массив объектов только с теми фильмами, у которых рейтинг больше или равен 8.

// P.S. Это довольно типичная задача в программировании. Вспомните, на самых разных сайтах можно так фильтровать любые товары/фильмы/сериалы...

// 2) Напишите функцию showListOfFilms, которая будет принимать этот же массив, а возвращать будет строку, которая содержит названия фильмов через запятую.

// Пример:

// showListOfFilms(films) => "Titanic, Die hard 5, Matrix, Some bad film"

// 3) Напишите функцию setFilmsIds, которая будет принимать этот же массив, а возвращать будет такой же массив с фильмами, но у каждого фильма будет новое поле id. Значение этого поля установите по нумерации фильма.

// Пример:

// setFilmsIds(films)  => [   { name: 'Titanic', rating: 9, id: 0 },   { name: 'Die hard 5', rating: 5, id: 1 },   { name: 'Matrix', rating: 8, id: 2 },   { name: 'Some bad film', rating: 4, id: 3 } ]

// 4) Запишите результат предыдущей функции в переменную tranformedArray. Напишите функцию checkFilms, которая будет проверять, что в каждом из фильмов есть поле id.
// Если это так - функция возвращает true. Очевидно, что сейчас условие должно выполняться, если мы передаем checkFilms(tranformedArray);

// const films = [
//   {
//       name: 'Titanic',
//       rating: 9
//   },
//   {
//       name: 'Die hard 5',
//       rating: 5
//   },
//   {
//       name: 'Matrix',
//       rating: 8
//   },
//   {
//       name: 'Some bad film',
//       rating: 4
//   }
// ];

// function showGoodFilms(arr) {
//   return console.log(arr.filter(item => item.rating >= 8));
// }

// function showListOfFilms(arr) {
//   return console.log(arr.map(item => item.name).join(', '));
// }


// // первый способ, ES6

// // function setFilmsIds(arr) {
// //   return console.log(arr.map((item, index) => ({...item, id: index })));
// // }

// const tranformedArray = setFilmsIds(films);


// // второй способ ES5

// function setFilmsIds(arr) {
//   return arr.map(function(item, index) {
//     let newItem = Object.assign({}, item);
//     newItem.id = index;
//     return newItem;
//   });
// }


// // первый способ

// function checkFilms(arr) {
//   return console.log(arr.every(item => item.hasOwnProperty('id')));
// }


// // второй способ

// function checkMovies(arr) {
//   return arr.every(item => {
//     if (item.id !== undefined) {
//       return console.log(true);
//     } else {
//       return console.log(false);
//     }
//   })
// }

// checkFilms(tranformedArray);

// checkMovies(tranformedArray);


// задачи по методам массивов #2





// module1-task116 подробно про npm и проект.JSON-server

// только теория без установки, не помню есть ли установленный npm в этом проекте, но здесь он и не нужен




// module1-task117 получение данных с сервера. Async/Await ES8

// class MenuCard {
//   constructor(src, alt, title, descr, price, parentSelector, ...classes) {
//     this.src = src;
//     this.alt = alt;
//     this.title = title;
//     this.descr = descr;
//     this.price = price;
//     this.classes = classes;
//     this.parent = document.querySelector(parentSelector);
//     this.transfer = 27;
//     this.changeToUAH(); 
//   }

//   changeToUAH() {
//     this.price = this.price * this.transfer; 
//   }

//   render() {
//     const element = document.createElement('div');

//     if (this.classes.length === 0) {
//         this.classes = "menu__item";
//         element.classList.add(this.classes);
//     } else {
//         this.classes.forEach(className => element.classList.add(className));
//     }

//     element.innerHTML = `
//         <img src=${this.src} alt=${this.alt}>
//         <h3 class="menu__item-subtitle">${this.title}</h3>
//         <div class="menu__item-descr">${this.descr}</div>
//         <div class="menu__item-divider"></div>
//         <div class="menu__item-price">
//             <div class="menu__item-cost">Цена:</div>
//             <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
//         </div>
//     `;
//     this.parent.append(element);
//   }
// }

// const getResource = async (url) => { // функция для рендера карточек 
//   const res = await fetch(url);

//   if (!res.ok) {
//     throw new Error(`Could not fetch ${url}, status: ${res.status}`);
//   }

//   return await res.json();
// };

// getResource('http://localhost:3000/menu') // использование функции для рендера карточек
//   .then(data => {
//     data.forEach(({img, altimg, title, descr, price}) => {
//       new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
//     });
//   });

// //  Forms

// const forms = document.querySelectorAll('form');
// const message = {
//   loading: 'img/form/spinner.svg',
//   success: 'Спасибо! Скоро мы с вами свяжемся',
//   failure: 'Что-то пошло не так...'
// };

// forms.forEach(item => {
//   bindPostData(item);
// });

// const postData = async (url, data) => { // перенос fetch в отдельную функцию
//   const res = await fetch(url, {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: data
//   });

//   return await res.json();
// };

// function bindPostData(form) {
//   form.addEventListener('submit', (e) => {
//     e.preventDefault();

//     let statusMessage = document.createElement('img');
//     statusMessage.src = message.loading;
//     statusMessage.style.cssText = `
//       display: block;
//       margin: 0 auto;
//     `;
//     form.insertAdjacentElement('afterend', statusMessage);

//     const formData = new FormData(form);

//     const json = JSON.stringify(Object.fromEntries(formData.entries()));

//     postData('server.php', json)
//     .then(data => {
//       console.log(data);
//       showThanksModal(message.success);
//       statusMessage.remove();
//     }).catch(() => {
//       showThanksModal(message.failure);
//     }).finally(() => {
//       form.reset();
//     });
//   });
// }

// function showThanksModal(message) {
//   const prevModalDialog = document.querySelector('.modal__dialog');

//   prevModalDialog.classList.add('hide');
//   openModal();

//   const thanksModal = document.createElement('div');
//   thanksModal.classList.add('modal__dialog');
//   thanksModal.innerHTML = `
//     <div class="modal__content">
//         <div class="modal__close" data-close>×</div>
//         <div class="modal__title">${message}</div>
//     </div>
//   `;
//   document.querySelector('.modal').append(thanksModal);
//   setTimeout(() => {
//     thanksModal.remove();
//     prevModalDialog.classList.add('show');
//     prevModalDialog.classList.remove('hide');
//     closeModal();
//   }, 4000);
// }