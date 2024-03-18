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