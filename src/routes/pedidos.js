const express = require("express");
const route = express.Router();

// Modulo de la conexion a la base de datos
const connectToDb = require("../db/db");
const {
    json
} = require("body-parser");

route.post('/pedidos/agregar', (request, response) => {
    // console.log(request.body);
    const itemsPedido = request.body.pedido;
    response.send({message: 'just a testing'});

    console.log(itemsPedido);

    itemsPedido.map(item => { 
        let nombre = item.nombre;
        let categoria = item.categoria;
        let seccion = item.seccion;
        let precio = item.precio; 
        let cantidad = item.cantidad;
        let totalProducto = item.totalProducto;

        let sql = `INSERT INTO pedidos VALUES(Null, '${nombre}', '${categoria}', '${seccion}', ${precio}, ${cantidad}, ${totalProducto}, 'pendiente')`;
        console.log(sql);

        connectToDb.query(sql, (errors, results, fields) => {
            if (errors) {
                console.log(errors);
                response.send(errors);
            } else if (results) {
                    response.send(results);
            }
        });
    });

});

module.exports = route;