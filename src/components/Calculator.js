import "./Calculator.css";
import Button from "./shared/Button";
import Input from "./shared/Input";
import Result from "./shared/Result";

function Calculator() {
  return (
    <div className="calculator">
      <div className="inputs_container">
        <Input placeholder={"DD"} label={"DÍA"} min={1} max={31} />
        <Input placeholder={"MM"} label={"MES"} min={1} max={12} />
        <Input placeholder={"YY"} label={"AÑO"} min={0} max={2023} />
      </div>
      <div className="btn-container">
        <hr className="separator" />
        <Button name="Calcular" />
      </div>
      <div>
        <Result value={"--"} description={"años"} />
        <Result value={"--"} description={"meses"} />
        <Result value={"--"} description={"días"} />
      </div>
    </div>
  );
}

export default Calculator;
