const { capitalize } = require('../src/capitalise');

describe('capitalize the first letter', () => {
  test('check capitalize', () => {
    expect(capitalize('hello microverse')).toBe('Hello microverse');
  });
});
