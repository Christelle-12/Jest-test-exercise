const {stringLength} = require ('./string');

test('check length of a string', () => {
  const short = "Hi!";
  const long = "I am tall"
  expect(stringLength(short)).toBe(3);
  expect(stringLength(long)).toBe(9);
});