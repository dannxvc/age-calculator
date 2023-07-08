import "./Button.css";

function Button({ onClickBtn, name }) {
  return (
    <button className="btn_calculate" onClick={onClickBtn}>
      {name}
    </button>
  );
}

export default Button;
