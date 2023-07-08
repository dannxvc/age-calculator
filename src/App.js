import "./App.css";
import Calculator from "./components/Calculator";
import ModeSelector from "./components/ModeSelector";

function App() {
  return (
    <div className="App ">
      <div className="app_container">
        <header>
          <h1 className="title">CALCULA TU EDAD</h1>
          <p className="title_description">
            Calcula tu edad colocando tu fecha de nacimiento en el siguiente
            formulario.
          </p>
        </header>
        <main>
          <ModeSelector />
          <Calculator />
        </main>
        <footer className="footer">
          Developed by
          <a className="enlace" href="https://danna.pages.dev/">
            <span> Danna Vila</span>
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
