export const celsiusToFahrenheit = (celsius: number) =>
  ((celsius * 9) / 5 + 32).toFixed();

export const fahrenheitToCelsius = (fahrenheit: number) =>
  ((fahrenheit * 5) / 9 - 32).toFixed();