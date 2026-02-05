const DEFAULT_TEMPERATURE = "";
const UNITS = { CELSIUS: "°C", FAHRENHEIT: "°F" } as const;
const DEFAULT_UNIT = UNITS.CELSIUS;

export type Unit = (typeof UNITS)[keyof typeof UNITS];
export { DEFAULT_TEMPERATURE, DEFAULT_UNIT, UNITS };
