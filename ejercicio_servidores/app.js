const express = require("express");
const path = require("path");

const app = express();

app.use(express.static("./DH-Heroes/public"));

/* Lo que hago con esta ultima linea de codigo es permitir a app.js el uso de archivos estaticos
como es el caso de el style.css y las imagenes que se encuentran en la carpeta public dentro de dh-heroes, 
la cual tengo que especificar */

app.listen(3030, () => {
  console.log("Servidor corriendo en puerto 3030");
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./DH-Heroes/views/index.html"));
});

app.get("/babbage", (req, res) => {
  res.sendFile(path.join(__dirname, "./DH-Heroes/views/babbage.html"));
});

app.get("/berners-lee", (req, res) => {
  res.sendFile(path.join(__dirname, "./DH-Heroes/views/berners-lee.html"));
});

app.get("/clarke", (req, res) => {
  res.sendFile(path.join(__dirname, "./DH-Heroes/views/clarke.html"));
});

app.get("/hamilton", (req, res) => {
  res.sendFile(path.join(__dirname, "./DH-Heroes/views/hamilton.html"));
});

app.get("/hopper", (req, res) => {
  res.sendFile(path.join(__dirname, "./DH-Heroes/views/hopper.html"));
});

app.get("/lovelace", (req, res) => {
  res.sendFile(path.join(__dirname, "./DH-Heroes/views/lovelace.html"));
});

app.get("/turing", (req, res) => {
  res.sendFile(path.join(__dirname, "./DH-Heroes/views/turing.html"));
});
