// Задание 1.
// В переменных a и b хранятся числа. Написать
// программу, которая выводит в консоль произведение
// // и сумму этих чисел.

const multiplay = (a, b) => console.log(a * b);

// // Задание 2.
// // // В двух переменных хранятся строки символов.
// // Написать программу, которая выведет в консоль
// // суммарное количество символов в обоих строках.

const strlength = (strA, strB) => console.log(strA.length + strB.length);

// // //Задание 3.
// // // Написать программу, которая запрашивает у
// // // пользователя ввод трёхзначного числа, а потом
// // // выводит в консоль сумму цифр введённого числа.
const sumNumber = (inputValue) => {
  const value = inputValue;
  let sum = 0;
  const arr = Array.from(value, Number);
  for (const i of arr) {
    sum += i;
  }
  return sum;
};

const isValidateInputValue = (inputNumber) => {
  const isValidValue =
    inputNumber === "" || Number.isNaN(inputNumber) || inputNumber.length !== 3;
  if (!isValidValue) {
    return sumNumber(inputNumber);
  }
  return "Вы ввели неправильное число";
};

const getInputValue = () => {
  const input = prompt("Введите трехзначное число");
  return isValidateInputValue(input);
};

module.exports = {
  multiplay,
  strlength,
  isValidateInputValue,
  getInputValue,
  sumNumber,
};
