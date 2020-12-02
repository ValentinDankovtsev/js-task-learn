const {getValueDate, getWeekDay} = require('./task_8');

describe('tests of isWord', () => {
  const MockValue = Date(12 10 1967);
  test('test result isWord', () => {
    expect(getWeekDay(MockValue)).toBe('ВС');
  });
});

// describe('get seconds', () => { Не понял как мокать даты
//   let OriginalDate;

  
//   beforeEach (()=> {
//     OriginalDate = window.Date;
//     window.Date = function () {
//       const date = new OriginalDate();
//       date.setFullYear(2000);
//       date.setMonth(5);
//       date.setDate(1);
//       return date;
//     };
//   });
//   afterEach(()=>{
//     window.Date = originalDate;
//   });
//   it("return list of seconds from date start", ()=>{
//     console.log(new Date());
//   })
//   });