import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./App.css";
import Etusivu from "./components/etusivu";
import Login from "./components/login";
import Register from "./components/register";
import useToken from "./components/useToken";

function App() {
  const { token, saveUser } = useToken();

  const login = (tunnukset) => {
    console.log(tunnukset);
    if (tunnukset.success) {
      saveUser(tunnukset.token, tunnukset.tunnus);
    } else {
      console.log("jotain meni vikaan");
    }
  };

  return (
    <div className="App">
      <div className="hero-image">
        <Router>          
          {token !== "" ? (
            <Link to="/" className="" />
          ) : (
            <Link to="/etusivu" className="" />
          )}
          <Routes>
            {<Route exact path="/" element={<Login login={login} />} />}
            <Route path="/etusivu/" element={<Etusivu />} />
            {token !== "" ? (<Route path="register" element={<Register />} />) : ("")}
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
