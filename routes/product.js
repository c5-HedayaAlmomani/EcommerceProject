const express = require("express");
const {
  createProduct,
  deleteProduct,
  editProduct,
  getProducts,
  getProductById,
} = require("../controllers/productControllers");
const productRouter = express.Router();

productRouter.post("/", createProduct);
productRouter.get("/", getProducts);
productRouter.get("/:productId", getProductById);
productRouter.delete("/", deleteProduct);
productRouter.put("/", editProduct);

module.exports = productRouter;
