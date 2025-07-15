const { Sequelize } = require("sequelize");

require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
  }
);

// autenticar la conexion a la bd. previo a realizar operaciones CRUD

const authenticate = async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexión a la bd establecida correctamente");
  } catch (error) {
    console.error("Error al conectar a la bd", error);
  }
};

const closeConnection = async () => {
  try {
    await sequelize.close();
    console.log("Conexión cerrada correctamente");
  } catch (error) {
    console.error("Error al cerrar la conexion", error);
  }
};

module.exports = { sequelize, authenticate, closeConnection };
