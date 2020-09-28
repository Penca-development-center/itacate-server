const express = require("express");
const route = express.Router();
// Modulo de la conexion a la base de datos
const connectToDb = require("../db/db");
const { json } = require("body-parser");

route.post("/acceso/cliente", (request, response) => {
  const email = request.body.userDetails.email;
  const password = request.body.userDetails.password;
  const sql = `SELECT * FROM usuarios WHERE correo_usuario = '${email}' && pass_usuario = '${password}'  LIMIT 1`;
  console.log(request.body.userDetails);
  connectToDb.query(sql, (error, results, fields) => {
    if (error) {
      response.send(error);
    } else {
      console.log(`Sin delimitar: ${results} .
              ********
              Delimitado: ${results[0]}`);
      response.send(results[0]);
    }
  });
});

module.exports = route;
