class Schedule {
  #schedule = [...Array(480)].fill(false);
  

  nextOpenMinute() {
    return this.#schedule.indexOf(false);
  }

  firstMinuteOfOrder() {
    return this.#schedule.indexOf(true);
  }

  clear() {
    try {
      this.#schedule = [...Array(480)].fill(false);
      return this.#schedule;
    } catch{
      return 'fail';
    }
  }

  print() {
    try {
      const percentOfCapacity = this.#schedule.reduce((acc, curr) => {
        if(curr !== false) {
          acc ++;
        }
        return acc;
      }, 0);
      console.table(this.#schedule);
      const capacityUnavailable = (percentOfCapacity / this.#schedule.length);
      return capacityUnavailable;
    } catch{
      return 'failed';
    }

  }

  freeWindow(startMinute, deliveryMinute) {
    const window = this.#schedule.slice(startMinute, deliveryMinute);
    return !window.includes(true);
  }
  
  addOrder(startMinute, deliveryMinute) {
    for(let i = startMinute; i <= deliveryMinute; i++){
      this.#schedule[i] = true;
    }
  }

}

module.exports = Schedule;
