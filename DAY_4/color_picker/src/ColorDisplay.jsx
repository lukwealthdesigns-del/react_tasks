function ColorDisplay({ rgb, hex }) {
  const { r, g, b } = rgb;

  function copyHex() {
    navigator.clipboard.writeText(hex);
    alert("Copied HEX: " + hex);
  }

  return (
    <div>
      <p>RGB: ({r}, {g}, {b})</p>
      <p>HEX: {hex}</p>

      <div
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: hex,
          border: "1px solid black",
        }}
      ></div>

      <button onClick={copyHex}>Copy Hex</button>
    </div>
  );
}

export default ColorDisplay;
