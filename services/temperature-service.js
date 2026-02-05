import { UNITS } from "@/constant";

function getOppositeUnit(unit) {
  return unit === UNITS.CELSIUS ? UNITS.FAHRENHEIT : UNITS.CELSIUS;
}

function convertTemperatureTo(unit, value) {
  return unit === UNITS.CELSIUS ? (value - 32) / 1.8 : value * 1.8 + 32;
}

function isIceTemperature({ value, unit }) {
  if (unit === UNITS.CELSIUS) {
    return value <= 0;
  }
  return value <= 32;
}

export { convertTemperatureTo, getOppositeUnit, isIceTemperature };
