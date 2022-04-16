import Axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import App from "../App";

function Login(setToken) {
  const [tunnus, uusiTunnus] = useState("");
  const [salasana, uusiSalasana] = useState("");

  const [pwd, setPwdShown] = useState(false);

  const togglePwd = () => {
    setPwdShown(!pwd);
  };

  //   async function kirjaudu(tunnukset) {
  //     return fetch("https://localhost:3001/login", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/JSON",
  //       },
  //       body: JSON.stringify(tunnukset),
  //     }).then((data) => data.json());
  //   }

  const kirjaudu = () => {
    Axios.post("http://localhost:3001/login", {
      käyttäjätunnus: tunnus,
      salasana: salasana,
    }).then((response) => {
      console.log(response.data);
    });
  };

  return (
    <div className="login-form">
      <h2>Kirjaudu sisään</h2>

      <label>Käyttäjätunnus</label>
      <br />
      <input
        type="text"
        id="tunnus"
        onChange={(e) => {
          uusiTunnus(e.target.value);
        }}
      />
      <br />
      <label>Salasana</label>
      <br />
      <input
        type={pwd ? "text" : "password"}
        id="password"
        onChange={(e) => {
          uusiSalasana(e.target.value);
        }}
      />
      <br />

      <button onClick={togglePwd}>Näytä salasana</button>
      <button onClick={kirjaudu}>Kirjaudu sisään</button>
    </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};

export default Login();
