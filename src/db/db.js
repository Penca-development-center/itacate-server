const mysql = require('mysql');

// Conexion local
const server = "127.0.0.1";
const user = "root";
const password = "Penca.1234";
const db = "itacate";

// Conexion Remota
// const server;
// const user;
// const password;
// const db;

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