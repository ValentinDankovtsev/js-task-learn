// Задача 1.Вывести в консоль сумму всех целых чисел от 50 до
// 100.

const getSum = (number) => {
  let sum = 0;
  for (i = 50; i <= number; i++) {
    sum += i;
  }
  return sum;
};
console.log(getSum(100));

// Задание 2.Вывести в консоль таблицу умножения на 7.
// 7 x 1 = 7
// 7 x 2 = 14
// …
// 7 x 9 = 63

const getTubleMulOfSeven = (x) => {
  let tableBody = '';
  for (let i = 1; i < 10; i++) {
    tableBody += `${x}*${i}=${x * i}\n`;
  }
  return tableBody;
};
console.log(getTubleMulOfSeven(7));

// Задание 3
// Запросить у пользователя ввод числа N. Вывести в
// консоль среднее арифметическое всех нечётных
// чисел от 1 до N.
const averageOddNumbers = (inputNumber) => {
  let oddCount = 0;
  let sum = 0;
  let average = 0;
  for (let number = 1; number <= inputNumber; number += 2) {
    sum += number;
    oddCount++;
    average = sum / oddCount++;
  }
  return average;
};

const getInputNumber = () => {
  const inputNumber = +prompt('Ввведите число N');
  return averageOddNumbers(inputNumber);
};


console.log(getInputNumber());

module.exports = {
  getSum,
  averageOddNumbers,
};
