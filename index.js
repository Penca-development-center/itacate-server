const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const methodOverride = require("method-override");
const cors = require("cors");
const serverPort = process.env.PORT || 3568;
const app = express();
//Settings
app.set("port", serverPort);
// Middlewares
app.use(express.json());
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(cors());

// Cors
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

//rutas
// Login de usuarios
app.use(require("./src/routes/acceso"));

// Registro
app.use(require("./src/routes/registro"));

// Direccion del usuario}
app.use(require("./src/routes/direccion"));

//Startng server
app.listen(app.get("port"), () => {
  process.stdout.write(`Server is running on port: ${app.get("port")}`);
});