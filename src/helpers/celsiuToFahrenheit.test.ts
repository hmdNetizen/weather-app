/* eslint-env jest */
import * as converter from './celsiuToFahrenheit';

describe('celcius converter', () => {
  it('correctly converts celsius to fahrenheit', () => {
    expect(converter.celsiusToFahrenheit(23)).toBe(73);
  })
});

describe('fahrenheit converter', () => {
  it('correctly converts fahrenheit to celsius', () => {
    expect(converter.fahrenheitToCelsius(73)).toBe(23);
  })
});