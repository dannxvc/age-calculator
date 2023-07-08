import { useState } from "react";
import "./Calculator.css";
import Button from "./shared/Button";
import Input from "./shared/Input";
import Result from "./shared/Result";

function Calculator() {
  const [form, setForm] = useState({
    day: "",
    month: "",
    year: "",
  });
  const [result, setResult] = useState({
    years: "--",
    months: "--",
    days: "--",
  });

  const { day, month, year } = form;
  const { years, months, days } = result;
  const onChange = (event, prop) => {
    setForm((state) => ({ ...state, [prop]: event.target.value }));
  };

  const currentDate = new Date();
  let currentYear = currentDate.getUTCFullYear();
  let currentMonth = currentDate.getUTCMonth() + 1;
  let currentDay = currentDate.getUTCDate();
  let monthAge;
  let dayAge;

  //get year
  let yearAge = currentYear - year;
  //get months
  if (currentMonth >= month) {
    monthAge = currentMonth - month;
  } else {
    yearAge--;
    monthAge = 12 + currentMonth - month;
  }
  //get days
  if (currentDay >= day) {
    dayAge = currentDay - day;
  } else {
    monthAge--;
    dayAge = 31 + currentDay - day;

    if (monthAge < 0) {
      monthAge = 11;
      yearAge--;
    }
  }

  const test = (event) => {
    event.preventDefault();
    setResult((state) => ({
      ...state,
      years: yearAge,
      months: monthAge,
      days: dayAge,
    }));
    console.log(currentMonth);
  };

  return (
    <form className="calculator" onSubmit={test}>
      <div className="inputs_container">
        <Input
          placeholder={"DD"}
          label={"DÍA"}
          value={day}
          name="day_of_birth"
          min={1}
          max={31}
          handleChange={(e) => onChange(e, "day")}
        />
        <Input
          placeholder={"MM"}
          label={"MES"}
          name="month_of_birth"
          value={month}
          min={1}
          max={12}
          handleChange={(e) => onChange(e, "month")}
        />
        <Input
          placeholder={"YY"}
          label={"AÑO"}
          value={year}
          name="year_of_birth"
          min={0}
          max={2023}
          handleChange={(e) => onChange(e, "year")}
        />
      </div>
      <div className="btn-container">
        <hr className="separator" />
        <Button name="Calcular" />
      </div>
      <div>
        <Result value={years} description={"años"} />
        <Result value={months} description={"meses"} />
        <Result value={days} description={"días"} />
      </div>
    </form>
  );
}

export default Calculator;
