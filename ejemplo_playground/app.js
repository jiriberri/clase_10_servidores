const express = require("express");
const path = require("path");

const app = express();

app.listen(3000, () => {
  console.log("Servidor corriendo en el puerto 3000");
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/index.html"));
});
/* si pongo el res.sendFile() y dentro de este pongo la ruta hacia el archivo html, me va a traer un error, por eso tengo que traerme el modulo path
y hacer todo eso para que funcione */
