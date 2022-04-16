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
  const REGtunnukset = {
    k: req.body.käyttäjätunnus,
    s: req.body.salasana,
  };

  DB.query("INSERT INTO käyttäjät (kayttajatunnus, salasana) VALUES (?, ?)", [REGtunnukset.k, REGtunnukset.s], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send("arvot syötetty");
      console.log(result);
    }
  });
});

app.post("/login", (req, res) => {
  const LOGINtunnukset = {
    k: req.body.käyttäjätunnus,
    s: req.body.salasana,
  };

  DB.query("SELECT * FROM käyttäjät WHERE kayttajatunnus = ? AND salasana = ?", [LOGINtunnukset.k, LOGINtunnukset.s], (err, result) => {
    if (err) {
      console.log(err);
      res.send("Väärä tunnus tai salasana");
    } else {
      res.send("on käyttäjä");
      console.log(result);
    }
  });
});

// app.use("/login", (req, res) => {
//   res.send({
//     token: "testi123",
//   });
// });

app.listen(3001, () => console.log("toimii"));
