// create a prompt to users to insert Fahrenheit temperature
const userFaharenheitTemp = prompt (`enter your fahrenheit temp to convert to celcius`)
// create funtion `convertToCelsius`
const convertToCelsius = (fahrenheitTemp) => {
  //use formula to convert the fahrenheit to celcius
  const celsiusTemp = (fahrenheitTemp - 32) * (5/9)
  console.log(celsiusTemp)


}

convertToCelsius(userFaharenheitTemp);


