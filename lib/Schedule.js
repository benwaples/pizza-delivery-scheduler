class Schedule {
  #schedule = [...Array(480)].fill(false);
  

  nextOpenMinute() {
    return this.#schedule.indexOf(false);
  }

  clear() {
    this.#schedule.map(minute => {
      minute = false;
      return minute;
    });
    return 'clear';
  }


};

module.exports = Schedule;
