import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./App.css";
import Etusivu from "./components/etusivu";
import Login from "./components/login";
import Dashboard from './components/Dashboard/Dasboard';
import Preferences from './components/Preferences/Preferences';

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/">Etusivu</Link>
          </li>
          <li>
            <Link to="login">Kirjaudu sisään</Link>
          </li>
        </ul>
        <Routes>
          <Route exact path="/" element={<Etusivu />}></Route>
          <Route exact path="login" element={<Login />}></Route>
        </Routes>
      </div>
      <div className="wrapper">
        <button>
          <Link to="dashboard">testi</Link>
        </button>
        <button>
          <Link to="preferences">testi1</Link>
        </button>
        <Routes>
          <Route exact path="dashboard" element={<Dashboard />}></Route>
          <Route exact path="preferences" element={<Preferences />}></Route>
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
