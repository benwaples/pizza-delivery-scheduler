const Schedule = require('./Schedule');

describe('Schedule Class', () => {
  it('should return the next available minute', () => {
    const schedule = new Schedule();

    const result = schedule.nextOpenMinute();

    expect(result).toBe(3);
  });
})