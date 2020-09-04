class Schedule {
  #schedule = [...Array(480)].fill(false);
  

  nextOpenMinute() {
    return this.#schedule.indexOf(false);
  }

  clear() {
    try {
      const cleared = this.#schedule.map(minute => {
        minute = false;
        return minute;
      });
      this.#schedule = cleared;
    } catch{
      return 'fail';
    }
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
    for(let i = startMinute; i <= deliveryMinute; i++){
      this.#schedule[i] = true;
    }
  }

}

module.exports = Schedule;
