const express = require("express");
const {
    createCardProduct,
    deleteCardProduct,
    getCardProductsByCardId,
} = require("../controllers/cardProductController");
const cardProductRouter = express.Router();

cardProductRouter.post("/", createCardProduct);
cardProductRouter.get("/:cardId", getCardProductsByCardId);
cardProductRouter.delete("/:cardProductId", deleteCardProduct);

module.exports = cardProductRouter;
