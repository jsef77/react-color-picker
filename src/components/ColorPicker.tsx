import React, { ChangeEventHandler } from "react";
import { useState } from "react";

const CardStyle = {
  width: "18rem",
};

const ColorPicker = () => {
  const [selectedColor, setSelectedColor] = useState("#8080FF");

  const colorPickerStyle = {
    backgroundColor: selectedColor,
    width: "auto",
    height: "256px",
  };

  const colorPickerLabelStyle = {
    textAlign: "center",
    backgroundColor: "#FFFFFF",
  };

  function handleColourChange(event: { target: { value: any } }) {
    setSelectedColor(event.target.value);
  }

  function hexToRgb(hex: string) {
    var bigint = parseInt(hex, 16);
    var r = (bigint >> 16) & 255;
    var g = (bigint >> 8) & 255;
    var b = bigint & 255;

    return r + "," + g + "," + b;
  }

  return (
    <div className="card" style={CardStyle}>
      <span style={colorPickerStyle}>
        <h3 style={colorPickerLabelStyle}>{selectedColor}</h3>
        <h3 style={colorPickerLabelStyle}>
          {hexToRgb(selectedColor.slice(1))}
        </h3>
      </span>
      <div className="card-body">
        <h5>Colour Picker</h5>
        <input
          type="color"
          value={selectedColor}
          onChange={handleColourChange}
        />
      </div>
    </div>
  );
};

export default ColorPicker;
