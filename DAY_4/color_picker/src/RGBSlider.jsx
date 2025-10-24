function RGBSlider({ label, value, onChange }) {
  return (
    <div>
      <label>
        {label}: {value}
      </label>
      <input
        type="range"
        min="0"
        max="255"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default RGBSlider;
