import Axios from "axios";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import PropTypes from "prop-types";

import "./login.css";

function Login({ login, error }) {
  const [tunnus, uusiTunnus] = useState("");
  const [salasana, uusiSalasana] = useState("");
  const [token, setToken] = useState("");
  const [success, setSuccess] = useState(false);

  const [pwd, setPwdShown] = useState(false);

  const togglePwd = () => {
    setPwdShown(!pwd);
  };

  async function submitHandler(e) {
    e.preventDefault();

    const tunnukset = { tunnus, token, success };

    Axios.post("http://localhost:3001/login", {
      käyttäjätunnus: tunnus,
      salasana: salasana,
    }).then((response) => {
      console.log(response);

      if (response.data.status === 600) {
        setToken(response.data.token);
        setSuccess(true);
      } else if (response.data.status === 500) {
        console.log("jotain meni vikaan tai väärät tunnukset");
        console.log("ERROR");
      } else console.log("ERROR");
    });

    console.log(tunnus, salasana);
    login(tunnukset);
  }

  return (
    <div className="login-form">
      <form onSubmit={submitHandler}>
        <h2>Kirjaudu sisään</h2>
        <br />
        {/* ERROR */}
        <div className="form-group">
          <label htmlFor="tunnus">Käyttäjätunnus</label>
          <br />
          <input
            type="text"
            id="tunnus"
            name="tunnus"
            onChange={(e) => {
              uusiTunnus(e.target.value);
            }}
          />
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="salasana">Salasana</label>
          <br />
          <input
            type={pwd ? "text" : "password"}
            id="password"
            name="salasana"
            onChange={(e) => {
              uusiSalasana(e.target.value);
            }}
          />
        </div>
        <br />

        <input type="submit" value="Kirjaudu sisään" />
      </form>
      <button onClick={togglePwd}>Näytä salasana</button>
    </div>
  );
}

export default Login;
