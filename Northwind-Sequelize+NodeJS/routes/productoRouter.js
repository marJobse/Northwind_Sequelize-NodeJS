const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

// http://localhost:3003/products
// Obtienes el listado total de los registros, utilizando modelo.findAll()
router.get("/products", async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    console.error("Error al consultar los productos", error);
    res.status(500).json({ error: error.message });
  }
});

// http://localhost:3003/products/10
//Obtienes un registro específico, utilizando modelo.findAll(Id).

router.get("/products/:id", async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await Product.findByPk(productId);
    if (!product)
      return res.status(404).json({ error: "Producto no encontrado" });
    res.json(product);
  } catch (error) {
    console.error("Error al buscar el producto", error);
    res.status(500).json({ error: error.message });
  }
});

// http://localhost:3003/products
//  Creas un nuevo registro en la tabla, utilizando modelo.create(param1, param2, etc)

router.post("/products", async (req, res) => {
  try {
    const productoNuevo = await Product.create(req.body);
    res.status(201).json(productoNuevo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// http://localhost:3003/products/10
//  Creas un nuevo registro en la tabla, utilizando modelo.update(updatedData).
router.put("/products/:id", async (req, res) => {
  try {
    const productId = req.params.id;
    const updateData = req.body;
    const product = await Product.findByPk(productId);
    if (!product)
      return res.status(404).json({ error: "Producto no encontrado" });
    await product.update(updateData); // todo menos ProductID, porque ese es el params.id que toma
    res.json(product);
  } catch (error) {
    console.error("Error al actualizar el producto", error);
    res.status(500).json({ error: error.message });
  }
});

//http://localhost:3003/products/10
// Eliminas un registro de la tabla, utilizando modelo.destroy()
router.delete("/products/:id", async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product)
      return res.status(404).json({ error: "Producto no encontrado" });
    await product.destroy();
    res.json({ message: "Producto eliminado exitosamente" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }

  n;
});

module.exports = router;
