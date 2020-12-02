// Задание 1.
// В переменных a и b хранятся числа. Написать
// программу, которая выводит в консоль произведение
// // и сумму этих чисел.

const multiplay = (a, b) => a * b;

// // Задание 2.
// // // В двух переменных хранятся строки символов.
// // Написать программу, которая выведет в консоль
// // суммарное количество символов в обоих строках.

const strlength = (strA, strB) => strA.length + strB.length;

// // //Задание 3.
// // // Написать программу, которая запрашивает у
// // // пользователя ввод трёхзначного числа, а потом
// // // выводит в консоль сумму цифр введённого числа.

const getInputValue = () => {
  const input = prompt('Введите трехзначное число');
  return isValidateInputValue(input);
};

const isValidateInputValue = (inputNumber) => {
  const isValidValue = inputNumber === '' || +inputNumber != NaN || inputNumber.length != 3;
  if (!isValidValue) {
    getInputValue();
  }
  return sumNumber(inputNumber);
};

const sumNumber = (inputValue) => {
  const value = inputValue;
  let sum = 0;
  const arr = Array.from(value, Number);
  for (const i of arr) {
    sum += i;
  }
  return sum;
};

module.exports = {
  multiplay,
  strlength,
  isValidateInputValue,
  getInputValue,
  sumNumber,
};
