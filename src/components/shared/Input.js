import "./Input.css";

function Input({ value, placeholder, label, min, max, handleChange, name }) {
  return (
    <div>
      <label htmlFor={name} className="calculator_label">
        {label}
      </label>
      <input
        name={name}
        type="number"
        className="calculator_input"
        value={value}
        placeholder={placeholder}
        min={min}
        max={max}
        onChange={handleChange}
        required
      />
    </div>
  );
}

export default Input;
