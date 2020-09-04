class Order {
  order = 'pizza';
  deliverMinute;
  #drivingDistanceInMinutes;
  #COOK_TIME = 20;
  startMinute;
  
  constructor(deliverMinute, distance) {
    this.deliverMinute = deliverMinute;
    this.#drivingDistanceInMinutes = distance;
    this.startMinute = this.deliverMinute - (this.#COOK_TIME + this.#drivingDistanceInMinutes);
  }

}

module.exports = Order;
