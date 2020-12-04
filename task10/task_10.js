// Пользователь вводит текстовую строку. Определить с
// помощью регулярного выражения, является ли
// введённая строка:
// 1.Датой.
// 2.Адресом электронной почты.
// 3.*Номером телефона.

// 1.
const getStringDate = () => {
  const stringDate = prompt('Ввведите строку в формате dd/mm/yyyy, dd-mm-yyyy, или dd.mm.yyyy');
  return stringDate;
};

const isStringToDate = (stringDate) => {
  const pattern = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
  if (pattern.test(stringDate)) {
    return true;
  }
  return false;
};
isStringToDate(getStringDate());

// 2.
const getStringMail = () => {
  const stringMail = prompt('Ввведите адрес электронной почты');
  return stringMail;
};

const isStringToMail = (stringMail) => {
  const pattern = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,4}$/;
  if (pattern.test(stringMail)) {
    return true;
  }
  return false;
};
isStringToMail(getStringMail());

// 3.
const getStringTnumber = () => {
  const stringTnumber = prompt('Ввведите номер телефона');
  return stringTnumber;
};
const isStringTnumber = (stringTnumber) => {
  const pattern = /^((8|\+7)[ \- ]?)?(\(?\d{3}\)?[ \- ]?)?[\d\- ]{7,10}$/;
  if (pattern.test(stringTnumber)) {
    return true;
  }
  return false;
};
isStringTnumber(getStringTnumber());

module.exports = {
  isStringToDate,
  isStringToMail,
  isStringTnumber,
};
