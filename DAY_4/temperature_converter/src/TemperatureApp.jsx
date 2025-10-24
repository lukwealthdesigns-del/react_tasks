// import { useState } from "react"
// import CelciusInput from "./CelsiusInput"
// import FarenheitInput from "./FahrenheitInput"

// function TemperatureApp() {
//     const [temperature, setTemperature] = useState(0)
    

//     function celciusToFarenheit(f) {
//         return ((f - 32) * 5)/9;
//     }
    
//     function farenheitToCelcius(c) {
//         return (c * 9) / 5 + 32;
//     }

//     function celciusChange() {
//         setTemperature(temperature)
//     }

//     function farenheitChange() {
//         setTemperature(temperature)
//     }

//     return (
        
//         <div>
//             <h1>Temperature Converter</h1>
//             <CelciusInput/>
//             <FarenheitInput/>
//         </div>

//     ) 
// }

// export default TemperatureApp;




import { useState } from "react";
import CelsiusInput from "./CelsiusInput";
import FahrenheitInput from "./FahrenheitInput";

function TemperatureApp() {
  const [temperature, setTemperature] = useState({ scale: "c", value: 0 });

  // Conversion formulas
  function toCelsius(f) {
    return ((f - 32) * 5) / 9;
  }

  function toFahrenheit(c) {
    return (c * 9) / 5 + 32;
  }

  // When Celsius changes
  function handleCelsiusChange(value) {
    setTemperature({ scale: "c", value });
  }

  // When Fahrenheit changes
  function handleFahrenheitChange(value) {
    setTemperature({ scale: "f", value });
  }

  // Decide what values to display
  const celsius =
    temperature.scale === "f" ? toCelsius(temperature.value) : temperature.value;

  const fahrenheit =
    temperature.scale === "c" ? toFahrenheit(temperature.value) : temperature.value;

  return (
    <div className="body">
      <h1>Temperature Converter</h1>

      <CelsiusInput value={celsius} onChange={handleCelsiusChange} />
      <FahrenheitInput value={fahrenheit} onChange={handleFahrenheitChange} />
    </div>
  );
}

export default TemperatureApp;
