const express = require("express");
const route = express.Router();

// Modulo de la conexion a la base de datos
const connectToDb = require("../db/db");
const {
    json
} = require("body-parser");


route.post('/notificaciones/nueva', (request, response) => {

    const notificacion = request.body.notification;
    console.log(notificacion);
    const sql = `INSERT INTO notificaciones(id, valor, tipo, status, hora, fecha, cliente) VALUES(Null, '${notificacion.valor}','${notificacion.tipo}','${notificacion.status}', '${notificacion.hora}','${notificacion.fecha}',${notificacion.cliente})`;
    console.log(sql)

    connectToDb.query(sql, (errors, results, fields) => {
        if (errors) { 
            response.send({message: 'Intente más tarde, error: ' + errors});
            console.log(errors);
        } else {
            response.send(results);
            console.log(results);
        }
    });
} );

module.exports = route;