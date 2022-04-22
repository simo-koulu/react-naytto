import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./App.css";
import Etusivu from "./components/etusivu";
import Login from "./components/login";
import Register from "./components/register";
import Dashboard from "./components/Dashboard/Dasboard";
import Preferences from "./components/Preferences/Preferences";
import useToken from "./components/useToken";

function App() {
  const { token, userName, removeUser, saveUser } = useToken();

  const login = (tunnukset) => {
    console.log(tunnukset);
    if (tunnukset.success) {
      saveUser(tunnukset.token, tunnukset.tunnus);
    } else {
      console.log("jotain meni vikaan");
    }
  };

  const logout = () => {
    console.log("logout");
    removeUser();
  };

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
            <Route exact path="/" element={<Etusivu />}></Route>
            <Route exact path="login" element={<Login login={login} />}></Route>
            <Route exact path="register" element={<Register />}></Route>
          </Routes>
        </Router>
        {token !== "" ? (
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
    </div>
  );
}

export default App;
