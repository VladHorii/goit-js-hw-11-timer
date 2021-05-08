class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.dateNow = Date.now();
    this.targetDate = targetDate.getTime();
    this.differences = this.targetDate - this.dateNow;
    this.refs = {
      days: document.querySelector('[data-value="days"]'),
      hours: document.querySelector('[data-value="hours"]'),
      mins: document.querySelector('[data-value="mins"]'),
      secs: document.querySelector('[data-value="secs"]'),
    };

    setInterval(() => {
      this.dateNow = Date.now();
      this.updateInterface(this.getDifferences());
    }, 1000);
  }
  getDifferences() {
    const time = this.targetDate - this.dateNow;
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    return { days, hours, mins, secs };
  }
  pad(value) {
    return String(value).padStart(2, "0");
  }
  updateInterface({ days, hours, mins, secs }) {
    this.refs.days.textContent = days;
    this.refs.hours.textContent = hours;
    this.refs.mins.textContent = mins;
    this.refs.secs.textContent = secs;
  }
}
const Timer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("March 8, 2021"),
});

const { days, hours, mins, secs } = Timer.getDifferences();
console.log(`${days}, ${hours}, ${mins}, ${secs}`);
