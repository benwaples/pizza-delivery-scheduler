const Driver = require('./Driver');

describe('Driver Class', () => {
  it('holds info about the drivers name', () => {
    const driver = new Driver('david');
    const driversName = driver.name;
    expect(driversName).toBe('david');
  });
});
