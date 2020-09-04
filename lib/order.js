class Order {
  order = 'pizza';
  deliverMinute;
  #drivingDistanceInMinutes;
  #COOK_TIME = 20;
  constructor(deliverMinute, distance) {
    this.deliverMinute = deliverMinute;
    this.#drivingDistanceInMinutes = distance;
  }

  startMinute() {
    return this.deliverMinute - (this.#COOK_TIME + this.#drivingDistanceInMinutes);
  }

}

module.exports = Order;
