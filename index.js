// create a prompt to users to insert Fahrenheit temperature
const userFaharenheitTemp = prompt (`enter your fahrenheit temp to convert to celcius`)
// create funtion `convertToCelsius`
const convertToCelsius = (fahrenheitTemp) => {
  //use formula to convert the fahrenheit to celcius
  const fahrAsNum = Number(fahrenheitTemp);
  const celsiusTemp = (fahrAsNum - 32) * (5/9)
  // return celsius temp
  return celsiusTemp;

}

convertToCelsius(userFaharenheitTemp);

// create function describe temp
const describeTemperature = (fahrTemp) => {
  //if the fahr temp is less than 32
  if(fahrTemp < 32) {
    return `very cold`;
  }
  //if fahr temp is less than 64
  else if (fahrTemp < 64) {
    return `cold`;
  }
  //if fahr temp is less than 86
  else if (fahrTemp < 86) {
    return `warm`;
  }
  //if the fahr temp is less than 100
 else  if (fahrTemp < 100) {
    return `hot`;
  }
  //if fahr temp is more than or equal to 100
  else if (fahrTemp >= 100) {
    return `very hot`;
  }
}


// Send an alert to the user including the Fahrenheit temperature they entered,temperature converted to Celsius, and how that feels.
alert(`you entered ${userFaharenheitTemp} the temperature converts to ${convertToCelsius(userFaharenheitTemp)} celcius which feels like ${describeTemperature(userFaharenheitTemp)}.` )