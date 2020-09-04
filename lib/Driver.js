
class Driver {
  name;
  schedule;
  constructor(name = 'name not given', schedule) {
    this.name = name;
    this.schedule = schedule;
  }

  currentSchedule() {
    const percentUnavailable = this.schedule.print();
    
    console.log(`your schedule is currently at %${percentUnavailable * 100} capacity`);
    return percentUnavailable;
  }
}

module.exports = Driver;
