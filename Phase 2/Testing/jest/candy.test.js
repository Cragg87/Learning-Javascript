const Candy = require('../lib/candy.js');

describe('Candy', () => {
  it('returns the name and price', () => {
    const candy = new Candy("Mars", 4.99)
    expect(candy.getName()).toBe("Mars")
    expect(candy.getPrice()).toBe(4.99)
  });
});