const Driver = require('./Driver');
const Schedule = require('./Schedule');

describe('Driver Class', () => {
  it('holds info about the drivers name', () => {
    const driver = new Driver('david');
    const driversName = driver.name;
    expect(driversName).toBe('david');
  });

  it('it should give the driver their schedule', () => {
    const schedule = new Schedule();
    schedule.addOrder(0, 50);

    const driver = new Driver('ben', schedule);
    const driversSchedule = driver.currentSchedule();

    expect(driversSchedule).toBe(51 / 480);


  });
});
