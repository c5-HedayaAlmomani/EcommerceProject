const CardProductController = require("./cardProductController");
const CardProduct = require("../../models/cardProductModel");

const cardProductController = new CardProductController(CardProduct);

module.exports = {
  createCardProduct: cardProductController.createCardProduct,
  deleteCardProduct: cardProductController.deleteCardProduct,
  getCardProductsByCardId: cardProductController.getCardProductsByCardId,
};
