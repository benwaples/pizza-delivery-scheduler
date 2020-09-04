const Order = require('./order');

describe('Order Class', () => {
  it('determines what time to start the pizza', () => {
    const order = new Order(40, 10);

    expect(order.startMinute).toBe(10);
  });
});
