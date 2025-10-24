
import { useState } from "react";
import CelsiusInput from "./CelsiusInput";
import FahrenheitInput from "./FahrenheitInput";

function TemperatureApp() {
  const [temperature, setTemperature] = useState({ conv: "c", value: 0 });

  function toCelsius(f) {
    return ((f - 32) * 5) / 9;
  }

  function toFahrenheit(c) {
    return (c * 9) / 5 + 32;
  }


  function handleCelsiusChange(value) {
    setTemperature({ conv: "c", value });
  }


  function handleFahrenheitChange(value) {
    setTemperature({ conv: "f", value });
  }


  const celsius =
    temperature.conv === "f" ? toCelsius(temperature.value) : temperature.value;

  const fahrenheit =
    temperature.conv === "c" ? toFahrenheit(temperature.value) : temperature.value;

  return (
    <div className="body">
      <h1>Temperature Converter</h1>

      <CelsiusInput value={celsius} onChange={handleCelsiusChange} />
      <FahrenheitInput value={fahrenheit} onChange={handleFahrenheitChange} />
    </div>
  );
}

export default TemperatureApp;
