const convertToCelsius = function(temperature) {
  let celcius = 5 * (temperature - 32) / 9
  celcius = Math.round(celcius * 10)/ 10
  return celcius 
};

const convertToFahrenheit = function(temperature) {
  let fahrenheit = (9 / 5) * temperature + 32
  fahrenheit = Math.round(fahrenheit * 10) / 10
  return fahrenheit
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

