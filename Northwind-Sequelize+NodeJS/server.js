const express = require("express");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 3003;

const { authenticate } = require("./config/sequelizeConn");
const productoRouter = require("./routes/productoRouter");

app.use(express.json());
app.use(productoRouter);

// autenticar la conexion a la bd. previo a realizar operaciones CRUD
(async () => {
  await authenticate();
})();

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
