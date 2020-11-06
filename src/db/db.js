const mysql = require('mysql');

// Conexion local
// const server = "localhost";
// const user = "root";
// const password = "Penca.1234";
// const db = "itacate";

// Conexion Remota
const server = 'db5000972804.hosting-data.io';
const user = 'dbu618955';
const password = "Pencadev.12345abc";
const db = 'dbs846067';

const connectToDb = mysql.createConnection({
    host: server,
    user: user,
    password: password,
    database: db
});

connectToDb.connect(error => {
    if (error) {
        process.stdout.write(error);
    } else {
        process.stdout.write("\n" + "Db server is runing");
    }
});


module.exports = connectToDb;