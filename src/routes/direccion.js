const express = require("express");
const route = express.Router();
// Modulo de la conexion a la base de datos
const connectToDb = require("../db/db");
const {
    json
} = require("body-parser");

route.post("/direccion/agregar", (request, response) => {
    console.log(request.body);
    const cliente = request.body.direction.cliente;
    const calle = request.body.direction.calle;
    const numero = request.body.direction.numero;
    const colonia = request.body.direction.colonia;
    const localidad = request.body.direction.localidad;
    const municipio = request.body.direction.municipio;
    const referencia = request.body.direction.referencia;
    const sql = `INSERT INTO direcciones VALUES (Null, '${cliente}','${calle}','${numero}','${colonia}','${localidad}','${municipio}','${referencia}')`;
    console.log(sql);
    connectToDb.query(sql, (results, errors, fields) => {
        if (results) {
            response.send(results);
        } else {
            response.send(errors);
        }
    });
});

module.exports = route;