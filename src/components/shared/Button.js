import "./Button.css";

function Button({ onClickBtn, name }) {
  return (
    <button type="submit" className="btn_calculate" onClick={onClickBtn}>
      {name}
    </button>
  );
}

export default Button;
