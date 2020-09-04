class Order {
  order = 'pizza';
  deliverMinute;
  #drivingDistanceInMinutes;
  #COOK_TIME = 20;
  constructor(deliverMinute) {
    this.deliverMinute = deliverMinute;
  }

  startMinute() {
    return this.deliverMinute - this.#COOK_TIME;
  }

}

module.exports = Order;
