import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

import "./App.css";
import Etusivu from "./components/etusivu";
import Login from "./components/login";
import Register from "./components/register";
import useToken from "./components/useToken";
//testi
function App() {
  const { token, userName, removeUser, saveUser } = useToken();

  const [logoutMessage, setLogoutMessage] = useState("");

  const login = (tunnukset) => {
    console.log(tunnukset);
    if (tunnukset.success) {
      saveUser(tunnukset.token, tunnukset.tunnus);
    } else {
      console.log("jotain meni vikaan");
    }
  };

  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  async function logout() {
    removeUser();

    setLogoutMessage("Kirjauduit ulos onnistuneesti!");
    await sleep(8000);
    setLogoutMessage("");
  }

  return (
    <div className="App">
      <div className="hero-image">
        <Router>
          <ul className="header-container">
            <li>
              <Link to="/" className="header-button">
                Etusivu
              </Link>
            </li>
            <li>
              <div className="login-button">
                {token !== "" ? (
                  <div className="tervetuloa">
                    <h2>
                      Tervetuloa, <span>{userName} !</span>
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
                {token !== "" ? (
                  <button className="header-button" onClick={logout}>
                    Kirjaudu ulos
                  </button>
                ) : (
                  <Link to="register" className="header-button">
                    Tee käyttäjä
                  </Link>
                )}
              </div>
            </li>
          </ul>
          <Routes>
            <Route exact path="/" element={<Etusivu logout={logoutMessage} />}></Route>
            <Route exact path="login" element={<Login login={login} />}></Route>
            <Route exact path="register" element={<Register />}></Route>
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
