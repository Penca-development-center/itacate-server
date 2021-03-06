const express = require("express");
const route = express.Router();

// Modulo de la conexion a la base de datos
const connectToDb = require("../db/db");
const {
    json
} = require("body-parser");

route.post("/productos/buscar", (req, res) => {
    const productos = [{
            id: "1",
            categoria: "sano",
            seccion: "entradas",
            nombre: "ensalada de uva y vino tinto",
            foto: "../../../assets/icon/itacate-platillos.svg",
            descripcion: "Ensalada con uvas, lechuga y fresas. Aderezada con ",
            precio: 35,
            cantidad: 0,
            totalProducto: 0,
        },
        {
            id: "2",
            categoria: "sopas",
            seccion: "entradas",
            nombre: "crema de Elote",
            foto: "../../../assets/icon/itacate-platillos.svg",
            descripcion: "lorem ipsum dolor sit amet",
            precio: 20,
            cantidad: 0,
            totalProducto: 0,
        },
        {
            id: "3",
            categoria: "sopas",
            seccion: "entradas",
            nombre: "sopa de coliflor",
            foto: "../../../assets/icon/itacate-platillos.svg",
            descripcion: "lorem ipsum dolor sit amet, con coliflor.",
            precio: 25,
            cantidad: 0,
            totalProducto: 0,
        },
        {
            id: "4",
            categoria: "reposteria",
            seccion: "reposteria",
            nombre: "pastel de queso",
            foto: "../../../assets/icon/itacate-platillos.svg",
            descripcion: "Pastel de queso y choclolate",
            precio: 20,
            cantidad: 0,
            totalProducto: 0,
        },
        {
            id: "5",
            categoria: "reposteria",
            seccion: "reposteria",
            nombre: "fresas con crema",
            foto: "../../../assets/icon/itacate-platillos.svg",
            descripcion: "Fresas con crema",
            precio: 15,
            cantidad: 0,
            totalProducto: 0,
        },
        {
            id: "6",
            categoria: "reposteria",
            seccion: "reposteria",
            nombre: "helado de chocolate",
            foto: "../../../assets/icon/itacate-platillos.svg",
            descripcion: "Helado sabor chocolate",
            precio: 15,
            cantidad: 0,
            totalProducto: 0,
        },
        {
            id: "7",
            categoria: "cafe",
            seccion: "bebidas",
            nombre: "Café americano",
            foto: "../../../assets/icon/itacate-platillos.svg",
            descripcion: "cafe expresso rebajado con agua",
            precio: 23,
            cantidad: 0,
            totalProducto: 0,
        },
        {
            id: "8",
            categoria: "bebidas",
            seccion: "bebidas",
            nombre: "cerveza",
            foto: "../../../assets/icon/itacate-platillos.svg",
            descripcion: "cerveza",
            precio: 40,
            cantidad: 0,
            totalProducto: 0,
        },
        {
            id: "9",
            categoria: "bebidas",
            seccion: "bebidas",
            nombre: "refresco",
            foto: "../../../assets/icon/itacate-platillos.svg",
            descripcion: "refresco",
            precio: 23,
            cantidad: 0,
            totalProducto: 0,
        },
        {
            id: "10",
            categoria: "mexicana",
            seccion: "huevos",
            nombre: "Huevos divorciados",
            foto: "../../../assets/icon/itacate-platillos.svg",
            descripcion: "lorem ipsum dolor sit amet",
            precio: 70,
            cantidad: 0,
            totalProducto: 0,
        },
        {
            id: "11",
            categoria: "mexicana",
            seccion: "huevos",
            nombre: "Huevos a la mexicana",
            foto: "../../../assets/icon/itacate-platillos.svg",
            descripcion: "lorem ipsun",
            precio: 70,
            cantidad: 0,
            totalProducto: 0,
        },
        {
            id: "12",
            categoria: "mexicana",
            seccion: "huevos",
            nombre: "huevos escalfados",
            foto: "../../../assets/icon/itacate-platillos.svg",
            descripcion: "lorem ipsum dolor sit amet",
            precio: 45,
            cantidad: 0,
            totalProducto: 0,
        },
        {
            id: "13",
            categoria: "mariscos",
            seccion: "mariscos",
            nombre: "camarones a la diabla",
            foto: "../../../assets/icon/itacate-platillos.svg",
            descripcion: "lorem ipsum dolor sit amet",
            precio: 49,
            cantidad: 0,
            totalProducto: 0,
        },
        {
            id: "14",
            categoria: "mariscos",
            seccion: "mariscos",
            nombre: "caldo de camaron",
            foto: "../../../assets/icon/itacate-platillos.svg",
            descripcion: "lorem ipsum dolor sit amet",
            precio: 56,
            cantidad: 0,
            totalProducto: 0,
        },
        {
            id: "15",
            categoria: "mariscos",
            seccion: "mariscos",
            nombre: "coctel de camaron",
            foto: "../../../assets/icon/itacate-platillos.svg",
            descripcion: "lorem ipsum dolor sit amet",
            precio: 70,
            cantidad: 0,
            totalProducto: 0,
        },
    ];

    console.log(req.body);
    console.log(productos);

    res.send(productos);
});

module.exports = route;