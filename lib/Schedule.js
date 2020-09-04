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

  print() {
    try {
      console.log(this.#schedule);
      return 'success';
    } catch{
      return 'failed';
    }

  }
  
  addOrder(startMinute, deliveryMinute) {
    const minutesNeeded = deliveryMinute - startMinute;
    for(let i = 0; i < minutesNeeded; i++){
      this.#schedule[i + startMinute] = true;
    }
  }

}

module.exports = Schedule;
