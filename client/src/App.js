import { BrowserRouter as Router, Routes, Route, Link, useResolvedPath } from "react-router-dom";
import { useState } from "react";

import "./App.css";
import Etusivu from "./components/etusivu";
import Login from "./components/login";
import Register from "./components/register";
import Dashboard from "./components/Dashboard/Dasboard";
import Preferences from "./components/Preferences/Preferences";

function App() {

  // const [token, setToken] = useState();
  
  const [käyttäjä, asetaKäyttäjä] = useState({tunnus: "", salasana: ""});
  const [error, asetaError] = useState("");


  const login = tunnukset => {
    console.log(tunnukset);
  }

  const logout = () => {
    console.log("logout");
  }

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
          <li>
            <Link to="register">Tee käyttäjä</Link>
          </li>
        </ul>
        <Routes>
          <Route exact path="/" element={<Etusivu />}></Route>
          <Route exact path="login" element={<Login Login={login} error={error} /> }></Route>
          <Route exact path="register" element={<Register />}></Route>
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
