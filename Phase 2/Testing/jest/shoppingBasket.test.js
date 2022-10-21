const Candy = require('../lib/candy.js');
const ShoppingBasket = require('../lib/shoppingBasket.js');

describe('ShoppingBasket', () => { 
  it('returns total price of basket', () => {
    basket = new ShoppingBasket();
    expect(basket.getTotalPrice()).toEqual(0);
  });
  it('adds items to a basket', () => {
    const basket = new ShoppingBasket();
    const candy1 = new Candy('Mars', 4.99);
    const candy2 = new Candy('Skittles', 1.99);
    basket.addItem(candy1);
    basket.addItem(candy2);
    expect(basket.getTotalPrice()).toEqual(6.98);
  });
  it('adds applies discount to price', () => {
    const basket = new ShoppingBasket();
    const candy1 = {name: "Mars", price: 4.99};
    const candy2 = {name: "Skittles", price: 1.99};
    basket.addItem(candy1);
    basket.addItem(candy2);
    basket.applyDiscount(1)
    expect(basket.getTotalPrice()).toEqual(5.98);
  });
});