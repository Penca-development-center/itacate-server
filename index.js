const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const methodOverride = require("method-override");
const cors = require("cors");
const serverPort = process.env.PORT || 3568;
const app = express();
const route = express.Router();
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
// mensaje de bienvenida
app.get("/", (req, res) => {
  res.send("Welcome to the itacate's app & web api.");
});

// Login de usuarios
app.use(require("./src/routes/acceso"));

// Registro
app.use(require("./src/routes/registro"));

// Direccion del usuario}
app.use(require("./src/routes/direccion"));

// Productos
app.use(require("./src/routes/productos"));

// Pedidos 
app.use(require("./src/routes/pedidos"));

// Notificaciones
app.use(require("./src/routes/notificaciones"));

//Startng server
app.listen(app.get("port"), () => {
  process.stdout.write(`Server is running on port: ${app.get("port")}`);
});