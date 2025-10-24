function CelsiusInput({ value, onChange }) {
  return (
    <div>
      <label>Celsius: </label>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        placeholder="Celsius"
      />
    </div>
  );
}

export default CelsiusInput;
