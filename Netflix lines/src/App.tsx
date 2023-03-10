import { useState } from "react";
import reactLogo from "./assets/react.svg";
import lines from "/Logo_lines.svg";
import Navbar from "./components/Navbar.jsx";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <Navbar></Navbar>
      </div>
      <div>
        <a href="https://capscom.fr" target="_blank">
          <img src="/Logo_lines.svg" className="logo" alt="Lines logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Lines + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Bien le bonjour sur mon side project</p>
    </div>
  );
}

export default App;
