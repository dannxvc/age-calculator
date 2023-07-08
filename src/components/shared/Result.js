import "./Result.css";

function Result({ value, description }) {
  return (
    <div>
      <span className="result_number">{value}</span>
      <span className="result_description"> {description}</span>
    </div>
  );
}

export default Result;
