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