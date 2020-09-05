const Parlor = require('./Parlor');
const Driver = require('./Driver');
const Schedule = require('./Schedule');
const Order = require('./Order');

describe('Parlor Class', () => {
  it('should calculate the parlors delivery schedule and assign orders to drivers', () => {
    const parlor = new Parlor();



  });

  it('should add a driver to the schedule and recalculate the schedule', () => {
    const parlor = new Parlor();
    parlor.addDriver('dave');

    expect(parlor.drivers[0].name).toBe('dave');
    
  });

  it('should add an order to the parlors schedule and recalculate the schedule', () => {
    const parlor = new Parlor();
    parlor.addDriver('dave');
    parlor.addOrder(30, 10);

    expect(parlor.drivers[0].currentSchedule.nextOpenMinute()).toBe(31);
  });

});
