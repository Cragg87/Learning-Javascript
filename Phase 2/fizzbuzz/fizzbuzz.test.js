const fizzBuzz = require('./fizzbuzz.js');

describe('fizzbuzz', () => {
  it('returns "Fizz"', () => {
    expect(fizzBuzz(3)).toBe("Fizz")
  });
  it('returns "Buzz"', () => {
    expect(fizzBuzz(5)).toBe("Buzz")
  });
  it('returns 8', () => {
    expect(fizzBuzz(8)).toBe(8)
  });
  it('returns "FizzBuzz"', () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz")
  });
  it('returns "Fizz"', () => {
    expect(fizzBuzz(18)).toBe("Fizz")
  });
  it('returns "Buzz"', () => {
    expect(fizzBuzz(20)).toBe("Buzz")
  });
});