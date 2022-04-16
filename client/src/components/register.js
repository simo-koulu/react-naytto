import Axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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

  const navigate = useNavigate();

  const lisääKäyttäjä = () => {
    if (pwd1 === pwd2) {
      Axios.post("http://localhost:3001/register", {
        käyttäjätunnus: tunnus,
        salasana: salasana,
      }).then((response) => {
        console.log(response);
        console.log("lisättiin");
        if (response.status === 200) {
          console.log("onnistui 200");
          navigate("/");
        } else {
          console.log("jotain meni vikaan 200");
        }
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
          setPwd1(e.target.value);
        }}
      />
      <br />
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
      <br />
      <button onClick={togglePwd}>Näytä salasana</button>
      <button onClick={lisääKäyttäjä}>Rekisteröidy </button>
    </div>
  );
}

export default Register;
