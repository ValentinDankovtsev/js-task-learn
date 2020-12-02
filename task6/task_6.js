// 1.Напишите функцию diff, которая получает в качестве
// параметров 2 числа и возвращает разницу между
// // наибольшим и наименьшим.

function diff(a, b) {
  if (a > b) {
    return a - b;
  }
  return b - a;
}
const sub = diff(1, 4);
console.log(sub);

// Задание 2.
//  Напишите функцию isWord, которая принимает на
// вход текстовую строку.Функция возвращает true, если
// строка состоит из одного слова и false, если из
// нескольких.

function isWord(str) {
  if (str.includes(' ')) {
    return false;
  }
  return true;
}
const str = 'Практика,isWord ';

// Задание 3
// *Напишите функцию pow(a, x), которая вернёт
// значение числа a, возведённого в степень x.
function pow(a, x) {
  let result = 1;
  for (let i = 0; i < x; i++) {
    result *= a;
  }

  return result;
}
console.log(pow(2, 4));

module.exports = {
  diff,
  isWord,
  pow,
};
