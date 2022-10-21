class Thermostat {
  constructor() {
    this.temp = 20;
    this.psm = true;
  }

  getTemperature() {
    if (this.temp < 10) {
      return 10;
    } else if (this.psm === false && this.temp > 32) {
      return 32;
    } else if (this.psm === true && this.temp > 25) {
      return 25;
    } else {
      return this.temp;
    }
  }

  up() {
    this.temp += 1;
  }

  down() {
    this.temp -= 1;
  }

  setPowerSavingMode(set) {
    if (set === true) {
      this.psm = true;
    } else if (set === false) {
      this.psm = false;
    }
  }

  reset() {
    this.temp = 20;
  }

  getCEU() {
    if (this.temp < 18) {
      return "Low-usage";
    } else if (this.temp <= 25) {
      return "Medium-usage";
    } else {
      return "High-usage";
    }
  }
}
  

module.exports = Thermostat;