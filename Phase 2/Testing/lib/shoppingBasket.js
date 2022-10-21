const Candy = require('./candy');

class ShoppingBasket {
  constructor() {
    this.array = [];
    this.discount = 0
  }

  addItem(candy) {
    const item = {
      name: candy.name,
      price: candy.price
    };
    this.array.push(item)
  }

  applyDiscount(discount) {
    console.log(this.discount);
    this.discount = discount;
    console.log(this.discount);
  }

  getTotalPrice() {
    let sum = 0;

    this.array.forEach((element) => {
      sum += element.price
    });

    return sum - this.discount;
  }
}

// const basket = new ShoppingBasket();
// const candy1 = {name: "Mars", price: 4.99};
// const candy2 = {name: "Skittles", price: 1.99};
// basket.addItem(candy1);
// basket.addItem(candy2);
// basket.applyDiscount(1)

module.exports = ShoppingBasket;