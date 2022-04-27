import Axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

function Login({ login }) {
  const [tunnus, uusiTunnus] = useState("");
  const [salasana, uusiSalasana] = useState("");

  const [error, asetaError] = useState("");

  const [pwd, setPwdShown] = useState(false);

  const togglePwd = (e) => {
    e.preventDefault();
    setPwdShown(!pwd);
  };

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

    Axios.post("http://localhost:3001/login", {
      käyttäjätunnus: tunnus,
      salasana: salasana,
    }).then((response) => {
      if (response.data.success) {
        const tunnukset = {
          tunnus: response.data.tunnus,
          token: response.data.token,
          success: response.data.success,
        };

        login(tunnukset);

        navigate("/");
      } else if (!response.data.success) {
        asetaError("tunnus tai salasana oli väärin");
      } else console.log("ERROR");
    });
  };

  return (
    <div className="login-form">
      <form onSubmit={submitHandler}>
        <div className="login-form-inner">
          <h2>Kirjaudu sisään</h2>
          <br />
          {error !== "" ? (
            <>
              {" "}
              <div className="error">{error}</div>
              <br />
            </>
          ) : (
            ""
          )}
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

          <button onClick={togglePwd} className="button">
            Näytä salasana
          </button>
          <input type="submit" value="Kirjaudu sisään" className="button" />
        </div>
      </form>
    </div>
  );
}

export default Login;
