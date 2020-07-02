const getDateString = require('./utils')

describe('Returns the correct string when passed a date', () => {
  test('expect it to convert a js morning date into a string that returns "Good Morning")', () => {
    const date9 = new Date(2020, 6, 1, 9, 30, 0)
    const date11 = new Date(2020, 6, 1, 11, 30, 0)
    const date12 = new Date(2020, 6, 1, 12, 0, 0)
    const date1230 = new Date(2020, 6, 1, 12, 30, 0)

    expect(getDateString(date9)).toBe('Good Morning!');
    expect(getDateString(date11)).toBe('Good Morning!')
    expect(getDateString(date12)).toBe('Good Afternoon!');
    expect(getDateString(date1230)).not.toBe('Good Morning!');
  })
   test('returns a good afternoon message for the afternoon', () => {
     const date14 = new Date(2020, 6, 1, 14, 0, 0);
     const date16 = new Date(2020, 6, 1, 16, 0, 0);
     const date18 = new Date(2020, 6, 1, 18, 0, 0);
     const date19 = new Date(2020, 6, 1, 19, 30, 0);

     expect(getDateString(date14)).toBe('Good Afternoon!');
     expect(getDateString(date16)).toBe('Good Afternoon!');
     expect(getDateString(date18)).toBe('Good Afternoon!');
     expect(getDateString(date19)).not.toBe('Good Afternoon!');

   });
   test('returns a good afternoon message for the afternoon', () => {
    const date0= new Date(2020, 6, 1, 0, 0, 0);
    const date21 = new Date(2020, 6, 1, 21, 0, 0);
    const date20 = new Date(2020, 6, 1, 20, 0, 0);
    const date23 = new Date(2020, 6, 1, 23, 30, 0);

    expect(getDateString(date21)).toBe('Good Evening!');
    expect(getDateString(date23)).toBe('Good Evening!');
    expect(getDateString(date20)).toBe('Good Evening!');
    expect(getDateString(date0)).not.toBe('Good Evening!');

  });
   test('returns a night time message', () => {
    const date0= new Date(2020, 6, 1, 0, 0, 0);
    const date2 = new Date(2020, 6, 1, 2, 0, 0);
    const date3 = new Date(2020, 6, 1, 3, 0, 0);
    const date5 = new Date(2020, 6, 1, 5, 30, 0);

    expect(getDateString(date0)).toBe('You should probably be asleep');
    expect(getDateString(date2)).toBe('You should probably be asleep');
    expect(getDateString(date3)).toBe('You should probably be asleep');
    expect(getDateString(date5)).not.toBe('You should probably be asleep');

  });
})