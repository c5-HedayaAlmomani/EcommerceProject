const ProductController = require("./productControllers");
const Product = require("../../models/productModel");

const productController = new ProductController(Product);

module.exports = {
    createProduct: productController.createProduct,
    deleteProduct: productController.deleteProduct,
    editProduct: productController.editProduct,
    getProducts: productController.getProducts,
    getProductById: productController.getProductById,
};
