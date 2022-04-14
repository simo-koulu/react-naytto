import Axios from "axios";
import { useState } from "react";

import "./Register.css";

function Register() {
  const [tunnus, uusiTunnus] = useState("");
  const [salasana, uusiSalasana] = useState("");

  const [pwd, setPwdShown] = useState(false);

  const [pwd1, setPwd1] = useState("");
  const [pwd2, setPwd2] = useState("");

  const togglePwd = () => {
    setPwdShown(!pwd);
  };

  const lisääKäyttäjä = () => {
    if (pwd1 === pwd2) {

      Axios.post("http://localhost:3001/register", {
        käyttäjätunnus  : tunnus,
        salasana        : salasana
      }).then((response) => {
        console.log(response);
        console.log("lisättiin");
      });

    } else {
      alert("ei ollu samat salasanat");
    }
  };

  return (
    <div className="register-form">
      <h2>Luo käyttäjä</h2>
      <br />
      <label>Käyttäjänimi</label>
      <br />
      <input
        type="text"
        onChange={(event) => {
          uusiTunnus(event.target.value);
        }}
      />
      <br />
      <label>Salasana</label>
      <br />
      <input
        type={pwd ? "text" : "password"}
        id="password"
        onChange={(event) => {
          setPwd1(event.target.value);
        }}
      />
      <br />
      <label>Salasana uudelleen</label>
      <br />
      <input
        type={pwd ? "text" : "password"}
        id="password"
        onChange={(event) => {
          uusiSalasana(event.target.value);
          setPwd2(event.target.value);
        }}
      />
      <br />
      <button onClick={togglePwd}>Näytä salasana</button>
      <button onClick={lisääKäyttäjä}>Rekisteröidy </button>
    </div>
  );
}

export default Register;
