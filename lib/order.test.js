const Order = require('./order');

describe('Order Class', () => {
  it('has a name and deliverMinute property', () => {
    const order = new Order(10);

    expect(order.deliverMinute).toBe(10);
  });
  
  it('determines what time to start the pizza', () => {
    const order = new Order(40, 10);

    expect(order.startMinute()).toBe(10);
  });
});
