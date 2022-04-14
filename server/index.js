const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const connection = mysql.createConnection ({
    host        : 'localhost',
    user        : 'root',
    password    : '',
    dbname      : 'kayttajatunnukset',
})


app.listen(3001, () => {
    console.log("toimii")
})