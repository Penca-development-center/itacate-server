const express = require("express");
const route = express.Router();

// Modulo de la conexion a la base de datos
const connectToDb = require("../db/db");
const {
    json
} = require("body-parser");
const { response } = require("express");


// Esto es para actualizar los datos
// Direcciones
route.post("/actualizar/obtenerDireccion", (request, response) => {
    console.log(request.body);
    const id_usuario = request.body.id_usuario;
    const sql = `SELECT * FROM direcciones  WHERE id_usuario = ${id_usuario}`;

    connectToDb.query(sql, (errors, results, fieds) => {
        if (errors) { 
            response.send({error: errors});
        } else {
            console.log(results);
            response.send(results);
        }
    });
});

// Guardar la nueva direccion
route.post("/actualizar/actualizarDireccion", (request, response) => {
    console.log(request.body);
});
// Obtener los datos y verlos
route.post("/actualizar/obtenerDatos", (request, response) => { 
    const id_usuario = request.body.id_usuario;
    const sql = `SELECT id_usuario, correo_usuario, nombre_usuario, pass_usuario, telefono_usuario FROM usuarios WHERE id_usuario = ${id_usuario} LIMIT 1`;

    connectToDb.query(sql, (errors, results, fieds) => {
        if (errors) { 
            response.send({error: errors});
        } else {
            response.send(results[0]);
        }
    });
});

// Agregar los cambios
route.post("/actualizar/actualizarDatos", (request, response) => {
    console.log(request.body);
    const detalles = request.body.userDetails;
    console.log(detalles);
    const sql = `UPDATE usuarios SET correo_usuario = '${detalles.correo}', nombre_usuario = '${detalles.nombre}', pass_usuario = '${detalles.passs}', telefono_usuario = ${detalles.telefono} WHERE id_usuario = ${detalles.id}`;

    connectToDb.query(sql, (errors, results, fields) => {
        if (errors) {
            console.log(errors);
            response.send({ error: errors });
        } else if (results) {
            response.send(results);
            console.log(results);
        }
    });

});

module.exports = route;