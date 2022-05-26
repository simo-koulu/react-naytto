import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Sisältö from "./sisältö";
import useToken from "./useToken";
import "./etusivu.css";

function Etusivu() {
  const { removeUser } = useToken();

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
          <button className="header-button" onClick={logout}>
            Kirjaudu ulos
          </button>
        </li>
      </ul>
      <Sisältö />
    </div>
  );
}

export default Etusivu;
