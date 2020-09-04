class Schedule {
  #schedule = [true, true, true, false];
  

  nextOpenMinute() {
    const minute = this.#schedule.indexOf(false);
    return minute;
  }


};

module.exports = Schedule;
