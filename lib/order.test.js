const Order = require('./order');

describe('Order Class', () => {
  it('has a name and deliverMinute property', () => {
    const order = new Order(10);

    expect(order.deliverMinute).toBe(10);
  });
});
