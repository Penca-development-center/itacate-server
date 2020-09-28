const express = require("express");
const route = express.Router();

// Modulo de la conexion a la base de datos
const connectToDb = require("../db/db");
const { json } = require("body-parser");

//Verficar usuario
route.post("/registro/verficar", (request, response) => {
    const email = request.body.user.email;
    const sql = `SELECT id_usuario FROM usuarios WHERE correo_usuario = '${email}' LIMIT 1`;
    connectToDb.query(sql, (errors, results, fields) => {
        if (errors) {
            console.log(errors);
            response.send(errors);
        } else if (results) {
            if (results.length > 0) {
                response.send(results[0]);
            } else if (results.length === 0) {
                response.send({ message: 'Se puede registrar' });
            }
        }
    });
});

//registro de usuario
route.post("/registro", (request, response) => {
            const nombre = request.body.registerInfo.userName;
            const correo = request.body.registerInfo.email;
            const telefono = request.body.registerInfo.phoneNumber
            const pass = request.body.registerInfo.password;
            const sql = `INSERT INTO usuarios VALUES (Null, '${nombre}', '${telefono}','${correo}','${pass}','cliente')`;
            connectToDb.query(sql, (errors, results, fields) => {
                if (errors) {
                    console.log(errors);
                    response.send(errors);
                } else if (results) {
                    response.send(results);
                }
            });
});

module.exports = route;