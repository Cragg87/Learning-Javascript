const multiply = require('../lib/multiply.js');

describe('multiply', () => {
  it('multiplies 5 and 2', () => {
    expect(multiply(5, 2)).toBe(10)
  });
  it('multiplies 10 and 55', () => {
    expect(multiply(10, 55)).toBe(550)
  });
});