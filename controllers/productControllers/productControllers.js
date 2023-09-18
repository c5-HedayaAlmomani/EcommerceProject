class ProductController {
  constructor(productModel) {
    this.productModel = productModel;
  }

  // Create a new product
  createProduct = async (req, res) => {
    try {
      const { name, price, BrandId } = req.body;
      const newProduct = await this.productModel.create({ name, price, BrandId });
      res.status(201).json(newProduct);
    } catch (error) {
      console.error("Error creating product:", error);
      res.status(500).json({ error: "Unable to create product" });
    }
  }

  // Delete a product by ID
  deleteProduct = async (req, res) => {
    const { productId } = req.params;

    try {
      const product = await this.productModel.findByPk(productId);

      if (!product) {
        return res.status(404).json({ error: "Product not found" });
      }

      await product.destroy();
      res.status(204).send();
    } catch (error) {
      console.error("Error deleting product:", error);
      res.status(500).json({ error: "Unable to delete product" });
    }
  }

  // Edit product by ID
  editProduct = async (req, res) => {
    const { productId } = req.params;
    const { name, price, BrandId } = req.body;

    try {
      const product = await this.productModel.findByPk(productId);

      if (!product) {
        return res.status(404).json({ error: "Product not found" });
      }

      product.name = name;
      product.price = price;
      product.BrandId = BrandId;

      await product.save();
      res.status(200).json(product);
    } catch (error) {
      console.error("Error editing product:", error);
      res.status(500).json({ error: "Unable to edit product" });
    }
  }

  // Get all products
  getProducts = async (req, res) => {
    try {
      const products = await this.productModel.findAll();
      res.status(200).json(products);
    } catch (error) {
      console.error("Error retrieving products:", error);
      res.status(500).json({ error: "Unable to retrieve products" });
    }
  }

  // Get product by ID
  getProductById = async (req, res) => {
    const { productId } = req.params;

    try {
      const product = await this.productModel.findByPk(productId);

      if (!product) {
        return res.status(404).json({ error: "Product not found" });
      }

      res.status(200).json(product);
    } catch (error) {
      console.error("Error retrieving product:", error);
      res.status(500).json({ error: "Unable to retrieve product" });
    }
  }
}

module.exports = ProductController;
