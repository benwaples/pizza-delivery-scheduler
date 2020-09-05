const Schedule = require('./Schedule');

class Driver {
  name;
  currentSchedule = new Schedule();
  constructor(name = 'name not given') {
    this.name = name;
  }

}

module.exports = Driver;
