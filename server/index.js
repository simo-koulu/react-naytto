const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const DB = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "kayttajatunnukset",
});

app.post("/register", (req, res) => {
  const tunnukset = {
    k: req.body.käyttäjätunnus,
    s: req.body.salasana,
  };

  DB.query("INSERT INTO käyttäjät (kayttajatunnus, salasana) VALUES (?, ?)", [tunnukset.k, tunnukset.s], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send("arvot syötetty");
      console.log(result);
    }
  });
});

app.listen(3001, () => {
  console.log("toimii");
});
