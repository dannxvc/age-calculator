import "./App.css";
import Calculator from "./components/Calculator";
import ModeSelector from "./components/ModeSelector";

function App() {
  return (
    <div className="App">
      <div className="app_container">
        <h1>Calcula tu edad</h1>
        <ModeSelector />
        <Calculator />
      </div>
    </div>
  );
}

export default App;
