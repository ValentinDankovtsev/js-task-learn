// Создайте объект user, содержащий поле name со
// значением ‘John’.

// 1.Запросить у пользователя ввод числа. Записать
// введенное значение в поле age объекта user.
const user = {
  name: 'John',
};
const addAgetoUser = () => {
  const inputage = prompt('Введите значение переменной age');
  user.age = inputage;
  return user;
};
console.log(addAgetoUser());

// 2.Создать копию объекта user с именем admin.
// Добавить новому объекту поле role со значением
// ‘admin’.
const admin = user;
admin.role = 'admin';
console.log(admin);

// *Записать все значения полей объекта admin в
// отдельные переменные. Имена переменных
// должны совпадать с названиями полей.
const {
  name,
  age,
  role,
} = admin;

module.exports = {
  addAgetoUser,
  user,
  admin,
};
