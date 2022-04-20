import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

import "./App.css";
import Etusivu from "./components/etusivu";
import Login from "./components/login";
import Register from "./components/register";
import Dashboard from "./components/Dashboard/Dasboard";
import Preferences from "./components/Preferences/Preferences";

function App() {
  // const [token, setToken] = useState();

  const [käyttäjä, asetaKäyttäjä] = useState({ tunnus: "", token: "" });
  const [error, asetaError] = useState("");

  const login = (tunnukset) => {
    console.log(tunnukset);
    
    if ( tunnukset.success ) {
      asetaKäyttäjä({
        tunnus: tunnukset.tunnus,
        token: tunnukset.token
      });
      console.log("kirjattiin sisään !");
    } else {
      console.log("tunnukset ei ollu oikeet tai jotain hajos");
    }
  };

  const logout = () => {
    console.log("logout");
  };

  return (
    <div className="App">
      <Router>
        <ul className="header-container">
          <li>
            <Link to="/" className="header-button">
              Etusivu
            </Link>
          </li>
          <li>
            <div className="login-button">
              {käyttäjä.tunnus !== "" ? (
                <div className="tervetuloa">
                  <h2>
                    Tervetuloa, <span>{käyttäjä.tunnus}, {käyttäjä.token}</span>
                  </h2>
                  <button onClick={logout}>Kirjaudu ulos</button>
                </div>
              ) : (
                <Link to="login" className="header-button">
                  Kirjaudu sisään
                </Link>
              )}
            </div>
          </li>
          <li>
            <div className="register-button">
              {käyttäjä.tunnus !== "" ? (
                <h2>:)</h2>
              ) : (
                <Link to="register" className="header-button">
                  Tee käyttäjä
                </Link>
              )}
            </div>
          </li>
        </ul>
        <Routes>
          <Route exact path="/" element={<Etusivu />}></Route>
          <Route exact path="login" element={<Login login={login} error={error} />}></Route>
          <Route exact path="register" element={<Register />}></Route>
        </Routes>
      </Router>
      {käyttäjä.tunnus !== "" ? (
        <div className="wrapper">
          <Router>
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
          </Router>
        </div>
      ) : (
        <h2>Kirjaudu sisään</h2>
      )}
    </div>
  );
}

export default App;
