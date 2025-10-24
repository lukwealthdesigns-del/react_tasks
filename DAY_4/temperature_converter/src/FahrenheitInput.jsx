
// function FarenheitInput({ farenheit, setFarenheit }) {
    

//     return(
//         <input value={farenheit} onChange={(e) => setFarenheit(e.target.value)} placeholder="farenheit"></input>
//     )
// }

// export default FarenheitInput;



function FahrenheitInput({ value, onChange }) {
  return (
    <div>
      <label>Fahrenheit: </label>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        placeholder="Fahrenheit"
      />
    </div>
  );
}

export default FahrenheitInput;


