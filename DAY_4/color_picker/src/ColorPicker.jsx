import { useState } from "react";
import RGBSlider from "./RGBSlider";
import ColorDisplay from "./ColorDisplay";

function ColorPicker() {

  const [color, setColor] = useState({ r: 255, g: 100, b: 50 });


  function handleChange(channel, value) {
    setColor({
      ...color,
      [channel]: Number(value),
    });
  }


  const toHex = (value) => {
    const hex = value.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  };

  const hexColor = `#${toHex(color.r)}${toHex(color.g)}${toHex(color.b)}`;

  return (
    <div>
      <h1>Color Picker</h1>

      <RGBSlider label="Red" value={color.r} onChange={(v) => handleChange("r", v)} />
      <RGBSlider label="Green" value={color.g} onChange={(v) => handleChange("g", v)} />
      <RGBSlider label="Blue" value={color.b} onChange={(v) => handleChange("b", v)} />

      <ColorDisplay rgb={color} hex={hexColor} />
    </div>
  );
}

export default ColorPicker;
