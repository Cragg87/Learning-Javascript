const Thermostat = require('../lib/thermostat.js');

describe('Thermostat', () => { 
  it('returns temperature of 20', () => {
    const thermostat = new Thermostat();
    expect(thermostat.getTemperature()).toEqual(20)
  });
  it('increases temperature by 2', () => {
    const thermostat = new Thermostat();
    thermostat.up()
    thermostat.up()
    expect(thermostat.getTemperature()).toEqual(22)
  });
  it('decreases temperature by 1', () => {
    const thermostat = new Thermostat();
    thermostat.up()
    thermostat.up()
    thermostat.down()
    expect(thermostat.getTemperature()).toEqual(21)
  });
  it('sets max temperature to 25', () => {
    const thermostat = new Thermostat();
    thermostat.setPowerSavingMode(true);
    for (let i = 0 ; i < 10 ; i++) {
      thermostat.up();
    }
    expect(thermostat.getTemperature()).toEqual(25)
  });
  it('sets max temperature to 32', () => {
    const thermostat = new Thermostat();
    thermostat.setPowerSavingMode(false);
    for (let i = 0 ; i < 20 ; i++) {
      thermostat.up();
    }
    expect(thermostat.getTemperature()).toEqual(32)
  });
  it('sets min temperature to 10', () => {
    const thermostat = new Thermostat();
    thermostat.setPowerSavingMode(true);
    for (let i = 0 ; i < 15 ; i++) {
      thermostat.down();
    }
    expect(thermostat.getTemperature()).toEqual(10)
  });
  it('resets temperature to 20', () => {
    const thermostat = new Thermostat();
    thermostat.up()
    thermostat.up()
    thermostat.reset()
    expect(thermostat.getTemperature()).toEqual(20)
  });
  it('returns current energy usage as medium', () => {
  const thermostat = new Thermostat();
  expect(thermostat.getCEU()).toBe("Medium-usage")
  });
});