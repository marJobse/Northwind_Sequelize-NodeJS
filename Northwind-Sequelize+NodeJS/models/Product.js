const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/sequelizeConn");

const Product = sequelize.define(
  "Product",
  {
    ProductID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    ProductName: {
      type: DataTypes.STRING(40),
      allowNull: false,
    },
    SupplierID: { type: DataTypes.INTEGER, defaultValue: null },
    CategoryID: { type: DataTypes.INTEGER, defaultValue: null },
    QuantityPerUnit: { type: DataTypes.STRING(20), defaultValue: null },
    UnitPrice: { type: DataTypes.DOUBLE, defaultValue: 0 },
    UnitsInStock: { type: DataTypes.SMALLINT, defaultValue: 0 },
    UnitsOnOrder: { type: DataTypes.SMALLINT, defaultValue: 0 },
    ReorderLevel: { type: DataTypes.SMALLINT, defaultValue: 0 },
    Discontinued: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  { tableName: "Products", timestamps: false }
);

module.exports = Product;
