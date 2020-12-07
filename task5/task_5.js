// Создайте массив целых чисел из 10 элементов.
// 1.Выведите в консоль сумму всех элементов массива.
// 2.Создайте новый массив на основе исходного, в
// котором каждый элемент будет вдвое больше
// элемента исходного массива с таким же индексом.
// (a[1] = 3, b[1] = 6, где a — исходный массив, b — новый
// массив).
// 3.*Найдите и выведите в консоль наибольший и
// наименьший элементы исходного массива.

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 1.Выведите в консоль сумму всех элементов массива.

const sumArr = () => {
  let sum = 0;
  for (const number of arr) {
    sum += number;
  }
  return sum;
};
console.log(sumArr());

// 2.Создайте новый массив на основе исходного, в
// // котором каждый элемент будет вдвое больше

const newArray = arr.map((element) => element * 2);

console.log(newArray);

// 3.*Найдите и выведите в консоль наибольший и
// // наименьший элементы исходного массива.

// получение максимального элемента массива
function getMaxValue(arr) {
  let max = arr[0]; // берем первый элемент массива
  for (let i = 0; i < arr.length; i++) {
    // переберем весь массив
    // если элемент больше, чем в переменной, то присваиваем его значение переменной
    if (max < arr[i]) max = arr[i];
  }
  // возвращаем максимальное значение
  return max;
}

function getMinValue(arr) {
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) min = arr[i];
  }
  return min;
}
const maxNum = getMaxValue(arr);
const minNum = getMinValue(arr);
console.log(maxNum, minNum);

module.exports = {
  sumArr,
  newArray,
  getMaxValue,
  getMinValue,
};
