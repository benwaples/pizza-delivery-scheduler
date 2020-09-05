const Schedule = require('./Schedule');
const Order = require('./order');
const Driver = require('./Driver');

class Parlor {
  schedule = new Schedule()
  drivers = [];
  constructor(){

  }

  #calculateSchedule() {
    // when the driver leaves
    const orderStart = this.schedule.firstMinuteOfOrder();
    // when the driver gets back
    const orderEnd = this.schedule.nextOpenMinute() - 1;
    // is the driver available
    const availableDriver = this.drivers.find(driver => driver.currentSchedule.freeWindow(orderStart, orderEnd));
    // assign the driver this order
    availableDriver.currentSchedule.addOrder(orderStart, orderEnd);
    this.schedule.clear();

    return availableDriver ? `order assigned to ${availableDriver}` : 'no drivers available';
  }

  addDriver(driverName) {
    const driver = new Driver(driverName);
    this.drivers.push(driver);
    this.#calculateSchedule();
  }

  addOrder(deliveryMinute, distance) {
    const order = new Order(deliveryMinute, distance);
    this.schedule.addOrder(order.startMinute, order.deliverMinute);
    this.#calculateSchedule();
  }
  
  printSchedules() {
    this.drivers.forEach(driver => driver.currentSchedule.print());
  }
}

module.exports = Parlor;
