const Schedule = require('./Schedule');
console.table = jest.fn();

describe('Schedule Class', () => {
  it('should return the next available minute', () => {
    const schedule = new Schedule();

    const result = schedule.nextOpenMinute();

    expect(result).toBe(0);
  });

  it('should clear the schedule and reset everything to false', () => {
    const schedule = new Schedule();

    schedule.addOrder(0, 80);
    const setUpAdd = schedule.nextOpenMinute();
    expect(setUpAdd).toBe(81);

    schedule.clear();
    const result = schedule.nextOpenMinute();

    expect(result).toBe(0);
  });

  it('should print the schedule', () => {
    const schedule = new Schedule();

    const result = schedule.print();

    expect(result).toBe(0);
  });

  it('should return true if a given window of time is availabe for an order', () => {
    const schedule = new Schedule();
    schedule.addOrder(0, 50);

    const isAvailable = schedule.freeWindow(60, 100);
    const isNotAvailable = schedule.freeWindow(10, 50);

    expect(isAvailable).toBeTruthy();
    expect(isNotAvailable).toBeFalsy();
  });

  it('should add an order based on the time it takes to make and deliver it', () => {
    const schedule = new Schedule();

    schedule.addOrder(0, 50);
    const result = schedule.nextOpenMinute();

    expect(result).toBe(51);
  });
});
