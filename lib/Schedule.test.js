const Schedule = require('./Schedule');

describe('Schedule Class', () => {
  it('should return the next available minute', () => {
    const schedule = new Schedule();

    const result = schedule.nextOpenMinute();

    expect(result).toBe(0);
  });
  it('should clear the schedule and reset everything to false', () => {
    const schedule = new Schedule();

    
    const result = schedule.clear();

    expect(result).toBe('clear');
  });
});
