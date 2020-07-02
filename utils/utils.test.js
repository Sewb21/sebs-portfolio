const getDateString = require('./utils')

describe('Returns the correct string when passed a date', () => {
  test('expect it to convert a js morning date into a string that returns "Good Morning")', () => {
    const date9 = new Date(2020, 6, 1, 9, 30, 0)
    const date11 = new Date(2020, 6, 1, 11, 30, 0)
    const date12 = new Date(2020, 6, 1, 12, 0, 0)
    const date1230 = new Date(2020, 6, 1, 12, 30, 0)

    expect(getDateString(date9)).toBe('Good Morning!');
    expect(getDateString(date11)).toBe('Good Morning!')
    expect(getDateString(date12)).toBe('Good Morning!');
    expect(getDateString(date1230)).not.toBe('Good Morning!');
  })

})