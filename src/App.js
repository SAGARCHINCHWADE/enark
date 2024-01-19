import "./App.css";
import HomePage from "./Pages/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    </div>
  );
}

export default App;
