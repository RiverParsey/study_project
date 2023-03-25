
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


// Next lesson : module1-task4
// Условия

// if (1) {
//   console.log('Ok!');
// } else {
//   console.log('Error');
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


// Next lesson : module1-task7
// Циклы в цикле и метки

// for (let i = 0; i < 3; i++) {
//   console.log(i);
//   for (let j = 0; j < 3; j++) {
//     console.log(j);
//   }
// }

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

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

// const a = prompt('Один из последних просмотренных фильмов?', ''),
//       b = prompt('На сколько оцените его?', ''),
//       c = prompt('Один из последних просмотренных фильмов?', ''),
//       d = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

for (let i = 0; i < 2; i++) {
  const a = prompt('Один из последних просмотренных фильмов?', ''),
        b = prompt('На сколько оцените его?', '');

  if (a != null && b != null && a != '' && b != '' && a.length < 50) {
    personalMovieDB[a] = b;
    console.log('done');
  } else {
    console.log('error');
    i--;
  }

  personalMovieDB.movies[a] = b;
}

if (personalMovieDB.count < 10) {
  console.log('просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  console.log('вы классический зритель');
} else if (personalMovieDB.count >= 30) {
  console.log('вы киноман');
} else {
  console.log('произошла ошибка')
}

console.log(personalMovieDB);