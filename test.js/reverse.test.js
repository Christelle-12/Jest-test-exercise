const {reverseString} = require('../src/reverse');

test('check reversed string', () => {
  const me = "I am Christelle";
  expect(reverseString(me)).toBe('elletsirhC ma I');
});
