import Axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Register.css";

function Register() {
  const [tunnus, uusiTunnus] = useState("");
  const [salasana, uusiSalasana] = useState("");

  const [error, setError] = useState("");

  const [pwd, setPwdShown] = useState(false);

  const [pwd1, setPwd1] = useState("");
  const [pwd2, setPwd2] = useState("");

  const togglePwd = (e) => {
    e.preventDefault();
    setPwdShown(!pwd);
  };

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

    if (pwd1 === pwd2 && tunnus !== "") {
      Axios.post("http://localhost:3001/register", {
        käyttäjätunnus: tunnus,
        salasana: salasana,
      }).then((response) => {
        console.log(response);
        if (response.status === 200) {
          navigate(-1);
        } else {
          console.log("jotain meni vikaan");
        }
      });
    } else {
      setError("ei ollu samat salasanat");
    }
  };

  return (
    <div className="register-form">
      <form onSubmit={submitHandler}>
        <div className="register-form-inner">
          <h2>Luo käyttäjä</h2>
          <br />
          {error !== "" ? (
            <>
              <div className="error">{error}</div>
              <br />
            </>
          ) : (
            ""
          )}
          <div className="form-group">
            <label>Käyttäjänimi</label>
            <br />
            <input
              type="text"
              onChange={(e) => {
                uusiTunnus(e.target.value);
              }}
            />
          </div>
          <br />
          <div className="form-group">
            <label>Salasana</label>
            <br />
            <input
              type={pwd ? "text" : "password"}
              id="password"
              onChange={(e) => {
                setPwd1(e.target.value);
              }}
            />
          </div>
          <br />
          <div className="form-group">
            <label>Salasana uudelleen</label>
            <br />
            <input
              type={pwd ? "text" : "password"}
              id="password"
              onChange={(e) => {
                uusiSalasana(e.target.value);
                setPwd2(e.target.value);
              }}
            />
          </div>
          <br />
          <button onClick={togglePwd} className="button">
            Näytä salasana
          </button>
          <input type="submit" value="Luo käyttäjä" className="button" />
        </div>
      </form>
    </div>
  );
}

export default Register;
