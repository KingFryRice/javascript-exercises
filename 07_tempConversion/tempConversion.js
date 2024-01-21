function roundDegrees(num, decimalPlaces) {
  const factor = Math.pow(10, decimalPlaces);
  return Math.round(num * factor) / factor;
}

const convertToCelsius = function(temp) {
  let degrees = ((temp - 32) * (5/9));
  return roundDegrees(degrees, 1);
};

const convertToFahrenheit = function(temp) {
  let degrees = (temp* (9/5) + 32);
  return roundDegrees(degrees, 1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
