const User = require("../../models/userModel"); 
const Product = require("../../models/productModel");

class CardProductController {
  constructor(cardProductModel) {
    this.cardProductModel = cardProductModel;
  }

  // Add a new product to the card
  async createCardProduct(req, res) {
    try {
      const { cardId, productId } = req.body;
      const newCardProduct = await this.cardProductModel.create({
        cardId,
        productId,
      });
      res.status(201).json(newCardProduct);
    } catch (error) {
      console.error("Error creating cardProduct:", error);
      res.status(500).json({ error: "Unable to create cardProduct" });
    }
  }

  // Delete a product from the card by ID
  async deleteCardProduct(req, res) {
    const { cardProductId } = req.params;

    try {
      const cardProduct = await this.cardProductModel.findByPk(cardProductId);

      if (!cardProduct) {
        return res.status(404).json({ error: "CardProduct not found" });
      }

      await cardProduct.destroy();
      res.status(204).send();
    } catch (error) {
      console.error("Error deleting cardProduct:", error);
      res.status(500).json({ error: "Unable to delete cardProduct" });
    }
  }

  // Get card by cardId
  async getCardProductsByCardId(req, res) {
    const { cardId } = req.params;

    try {
      const cardProducts = await this.cardProductModel.findAll({
        where: { cardId },
        include: [
          {
            model: User,
            attributes: ["userId", "name"],
          },
          {
            model: Product,
            attributes: ["productId", "name", "price"],
          },
        ],
      });

      res.status(200).json(cardProducts);
    } catch (error) {
      console.error(
        "Error retrieving cardProducts with joins by cardId:",
        error
      );
      res.status(500).json({ error: "Unable to retrieve cardProducts" });
    }
  }
}

module.exports = CardProductController;
