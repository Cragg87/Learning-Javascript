const Candy = require('./candy');

class ShoppingBasket {
  constructor() {
    this.array = [];
  }

  addItem(candy) {
    const item = {
      name: candy.name,
      price: candy.price
    }
    this.array.push(item)
  }

  arrayLength() {
    return this.array.length;
  }

  getTotalPrice() {
    let sum = 0;

    this.array.forEach((element) => {
      sum += element.price
    });

    return sum;
  }
}

module.exports = ShoppingBasket;