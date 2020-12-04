// Задание 1.В переменных a и b хранятся числа. Вывести в
// консоль наибольшее из них.

const maxNumber = (a, b) => {
  if (a > b) {
    return a;
  }
  return b;
};
console.log(maxNumber());

// Задание 2.Запросить у пользователя ввод числа от 1 до 12.
// // Вывести в консоль название месяца, соответствующее
// // этому числу (1 — январь, 2 — февраль и т.д.).
const getmonthNumber = (inputNumber) => {
  switch (inputNumber) {
    case 1:
      return 'Январь';
    case 2:
      return 'Февраль';
    case 3:
      return 'Март';
    case 4:
      return 'Апрель';
    case 5:
      return 'Май';
    case 6:
      return 'Июнь';
    case 7:
      return 'Июль';
    case 8:
      return 'Август';
    case 9:
      return 'Сентябрь';
    case 10:
      return 'Октябрь';
    case 11:
      return 'Ноябрь';
    case 12:
      return 'Декабрь';
    default:
      return 'Нет таких значений';
  }
};

const getInputValue = () => {
  const inputNumber = +prompt('Введите любое число от 1 до 12');
  return getmonthNumber(inputNumber);
};

console.log(getInputValue());

// Задание 3.
// В переменных circle и square хранятся площади круга
// и квадрата соответственно. Написать программу,
// которая определяет, поместится ли круг в квадрат.
// Решение
// Круг уместится в квадрат только тогда, когда его диаметр будет не больше стороны квадрата.
// Чтобы квадрат уместил в круг необходимо, чтобы его диагональ была не больше диаметра круга.
// Диаметр круга рассчитывается по формуле:
// d=2√(s/π)
// Сторона квадрата:
// a=√S
// Диагональ квадрата:
// d_кв=√2S

const getsideSquare = (square) => Math.sqrt(square);
const getdiameterCircle = (circle) => 2 * Math.sqrt(circle / 3.14);

const isCircleInSquare = (side, diametr) => {
  if (diametr <= side) {
    return 'Круг уместиться в квадрате';
  }
  return 'Круг не уместиться в квадрате';
};
const side = getsideSquare(15);
const diametr = getdiameterCircle(16);
console.log(isCircleInSquare(side, diametr));

module.exports = {
  maxNumber,
  getInputValue,
  getmonthNumber,
  isCircleInSquare,
};
