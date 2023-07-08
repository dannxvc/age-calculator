import { useState } from "react";
import "./Input.css";

function Input({ placeholder, label, min, max }) {
  const [value, setValue] = useState();
  const handleChange = (e) => {
    const value = Math.max(min, Math.min(max, Number(e.target.value)));
    setValue(value);
  };
  return (
    <div>
      <label className="calculator_label">{label}</label>
      <input
        type="number"
        className="calculator_input"
        value={value}
        placeholder={placeholder}
        min={min}
        max={max}
        onChange={handleChange}
      />
    </div>
  );
}

export default Input;
