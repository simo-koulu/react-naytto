import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Register from "./register";
import Logout from "./logout";
import Sisältö from "./sisältö.js";
import useToken from "./useToken";
import "./etusivu.css";

function Etusivu() {
  const { token, userName, removeUser, saveUser } = useToken();

  const navigate = useNavigate();

  const logout = () => {
    removeUser();
    navigate("/");
  };

  return (
    <div className="etusivu">
      <ul className="header-container">
        <li>
          <Link to="/register" className="header-button">
            Luo käyttäjä
          </Link>
        </li>
        <li>
          {/* <Link to="/logout" className="header-button">
            Kirjaudu ulos
          </Link> */}
          <button className="header-button" onClick={logout}>
            Kirjaudu ulos
          </button>
        </li>
      </ul>
      <Sisältö />
      <Routes>
        <Route path="/register" element={<Register />} />
        {/* <Route path="/logout" element={<Logout />} /> */}
      </Routes>
      {/* <h1 className="tervetuloa-message">Tervetuloa</h1> */}
    </div>
  );
}

export default Etusivu;
