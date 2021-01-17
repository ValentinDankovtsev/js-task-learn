// 1.Запросите у пользователя дату в формате
// ДД.ММ.ГГГГ. Напишите программу, выводящую день
// недели по введённой дате.

function getWeekDay(inputDate) {
  const days = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];
  return days[inputDate.getDay()];
}

function getValueDate() {
  const input = prompt("DD MM YYYY");
  const [day, month, year] = input.split(" ");
  const inputDate = new Date(`${year}-${month}-${day}`);
  return getWeekDay(inputDate);
}

// 2.Написать программу, которая выводит в консоль
// количество минут, прошедшее с начала сегодняшнего
// дня.

function getMinutesPassedInCurrentDay() {
  const now = new Date();
  const hours = now.getUTCHours();
  const min = now.getUTCMinutes();
  const minPass = hours * 60 + min;

  return console.log(minPass);
}

// 3.*В двух переменных хранятся даты рождения двух
// пользователей в формате ДД.ММ.ГГГГ. Написать
// программу, которая определяет более молодого
// пользователя.

function isFromBiggerThanTo(from, to) {
  if (new Date(from).getTime() >= new Date(to).getTime()) {
    return new Date(from);
  }
  return new Date(to);
}

module.exports = {
  getValueDate,
  getMinutesPassedInCurrentDay,
  isFromBiggerThanTo,
};
