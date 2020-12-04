// 1. Даны длины трёх сторон треугольника. Определить,
// является ли треугольник прямоугольным.

function isTriangle(a, b, c) {
  if ((a === b * b + c * c) || (b === a * a + c * c) || (c === a * a + b * b)) {
    return true;
  }
  return false;
}
isTriangle(3, 3, 18);

// 2.Пользователь вводит число R. Написать программу,
// которая выведет в консоль длину окружности и
// площадь круга с радиусом R.

// const getInputValue = () => {
//   const radius = +prompt('Введите R');
//   const length = 2 * Math.PI * radius;
//   const square = Math.PI * radius ** 2;
//   const result = {
//     length,
//     square,
//   };
//   return result;
// };

// getInputValue();

// // // 3. Пользователь вводит числа a, b и c. Написать
// // // программу, выводящую корни квадратного
// // // уравнения с коэффициентами a, b и c.

// // // Квадратное уравнение – уравнение, сводящееся к виду a x 2 + b x + c = 0 , где a ≠ 0 , b , c – числа.
// // // Выражение D = b 2 − 4 a c называется дискриминантом квадратного уравнения. ∙ если , то оно не имеет корней.

// const getInputValues = () => {
//   const inputValue = prompt('введите три числа abc: ');
//   const arr = inputValue.split(',');
//   return arr;
// };

// function guad(arr) {
//   const [a, b, c] = arr;
//   if (a === 0) return 'ошибка';
//   const D = b * b - 4 * a * c;
//   let x1;
//   let x2;
//   if (D > 0) {
//     x1 = (-b + Math.sqrt(D)) / (2 * a);
//     x2 = (-b - Math.sqrt(D)) / (2 * a);
//     const result = {
//       x1,
//       x2,
//     };
//     return result;
//   } if (D === 0) {
//     x1 = -b / (2 * a);
//     return x1;
//   } if (D < 0) {
//     return D;
//   }
// }

// guad(getInputValues());

module.exports = {
  isTriangle,
};
