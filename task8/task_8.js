// 1.Запросите у пользователя дату в формате
// ДД.ММ.ГГГГ. Напишите программу, выводящую день
// недели по введённой дате.

function getWeekDay(inputDate) {
  const days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
  return console.log(days[inputDate.getDay()]);
}

function getValueDate() {
  const input = prompt('DD MM YYYY');
  const [day, month, year] = input.split(' ');
  const inputDate = new Date(`${year}-${month}-${day}`);
  return getWeekDay(inputDate);
}
getValueDate();

// 2.Написать программу, которая выводит в консоль
// количество минут, прошедшее с начала сегодняшнего
// дня.

function getMinutesPassedInCurrentDay() {
  const now = new Date();
  const hours = now.getHours();
  const min = now.getMinutes();
  const minPass = (hours * 60) + min;

  return console.log(minPass);
}
getMinutesPassedInCurrentDay();


// 3.*В двух переменных хранятся даты рождения двух
// пользователей в формате ДД.ММ.ГГГГ. Написать
// программу, которая определяет более молодого
// пользователя.

let from = '08.19.2012'.split('/');
let to = '08.12.2013'.split('/');

function isFromBiggerThanTo(from, to){
   if (new Date(from).getTime() >=  new Date(to).getTime()) {
   return new Date(from);
   } else {
 return new Date(to);
   } ;
}
console.log(isFromBiggerThanTo(from, to));

module.exports = {
  getValueDate,
  getWeekDay,
  isFromBiggerThanTo,
  getMinutesPassedInCurrentDay
};