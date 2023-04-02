const str = 'Привет';
const num = 123;
const flog = true;
const txt = true;

console.log(typeof(str));
console.log(typeof(num));
console.log(typeof(flog));
console.log(typeof(txt));

let a1 = 5 + 3;
let a2 = 5 - 3;
let a3 = 5 * 3;
let a4 = 5 / 3;

console.log(a1, a2, a3, a4);

let a6 = 5 % 3;
let a7 = 3 % 5;
let a8 = 5 + '3';
let a9 = '5' + 3;
let a10 = 75 + 'кг';

console.log(a6, a7, a8, a9, a10);

// Напишите оператор if, такой, чтобы в качестве выражения в скобках у него были значения true, false (Например, if( true ) или if( false )). Посмотрите как работает этот оператор, поместив какую-нибудь команду после круглых скобок (Например, console.log(1)). 
// Примечание: это задание очень простое. Если вы читая его, поняли суть, не выполняйте его 

if (true) {
  console.log(1);
}

// Создайте переменные m и n. В m поместите произвольное числовое значение. 
// Напишите оператор ветвления if так, чтобы если m было больше 50, то в переменную n помещалось слово «большое», иначе — слово «маленькое».

const m = 32;
let n;

if (m > 50) {
  n = 'большое';
  console.log(n);
} else {
  n = 'маленькое';
  console.log(n);
}

// Определите сколько раз выполнится цикл while? Примечание: это можно сделать прочитав скрипт или запустив его консоли браузера.

let i = 2;
while (i < 9) {
  console.log(i++);
}

// ответ : 7

// Напишите скрипт, который используя оператор while выведет все числа от 45 до 67.

let a = 45;

while (a <= 67) {
  console.log(a++);
}

// Напишите скрипт, который используя оператор while выведет все числа от 40 до 670, кратные 10.

let b = 40;

while (b <= 670) {
  if (b % 10 === 0) {
    console.log(b);
  }
  b++;
}

// Напишите скрипт, который используя оператор for выполнит два предыдущих задания.

for (i = 45; i <= 67; i++) {
  console.log(i);
}

for (i = 40; i <= 670; i++) {
  if (i % 10 === 0) {
    console.log(i);
  }
}

// Напишите функцию hello1(), которая при вызове будет возвращать строку «Привет, JavaScript!»

function hello() {
  console.log('Привет, JavaScript');
}

hello();

// Напишите функцию hello2(), которая при вызове будет принимать переменную name (например, «Василий») и выводить строку (в нашем случае «Привет, Василий»).
// В случае отсутствующего аргумента выводить «Привет, гость»

