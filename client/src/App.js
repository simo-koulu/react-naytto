import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

import "./App.css";
import Etusivu from "./components/etusivu";
import Login from "./components/login";
import Register from "./components/register";
import Dashboard from "./components/Dashboard/Dasboard";
import Preferences from "./components/Preferences/Preferences";
import useToken from "./components/useToken";

function App() {

  const [käyttäjä, asetaKäyttäjä] = useState("");

  const { token, asetaToken } = useToken();
  
  const login = (tunnukset) => {
    console.log(tunnukset);
    if (tunnukset.success) {
      asetaToken(tunnukset.token);
      asetaKäyttäjä(tunnukset.tunnus);
    } else {
      console.log("jotain meni vikaan");
    }
  };

  const logout = () => {
    console.log("logout");
    asetaToken("");
    sessionStorage.clear();
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
              {token === "testi123" ? (
                <div className="tervetuloa">
                  <h2>
                    Tervetuloa,{" "}
                    <span>
                      {käyttäjä.tunnus} ! 
                    </span>
                  </h2>
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
              {token === "testi123" ? (
                <button className="header-button" onClick={logout}>Kirjaudu ulos</button>
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
          <Route exact path="login" element={<Login login={login} />}></Route>
          <Route exact path="register" element={<Register />}></Route>
        </Routes>
      </Router>
      {token === "testi123" ? (
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
