// Задача 1.Вывести в консоль сумму всех целых чисел от 50 до
// 100.

const getSum = (number) => {
  let sum = 0;
  for (let i = 50; i <= number; i++) {
    sum += i;
  }
  return console.log(sum);
};
// console.log(getSum(100));

// Задание 2.Вывести в консоль таблицу умножения на 7.
// 7 x 1 = 7
// 7 x 2 = 14
// …
// 7 x 9 = 63

const getTubleMulOfSeven = () => {
  for (let i = 1; i < 10; i++) {
    console.log(`7 x ${i} = ${7 * i}`);
  }
};

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
  return console.log(average);
};

const getInputNumber = () => {
  const inputNumber = Number(prompt("Ввведите число N"));
  return averageOddNumbers(inputNumber);
};

module.exports = {
  getSum,
  getTubleMulOfSeven,
  getInputNumber,
};
