const { DataTypes } = require("sequelize");
const sequelize = require("../sequelize");
const Card = require("../cardModel/index"); // Import the Card model
const Product = require("../productModel/index"); // Import the Product model

const CardProduct = sequelize.define("CardProduct", {
  cardProductId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  cardId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Card,
      key: "cardId",
    },
  },
  productId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Product,
      key: "productId",
    },
  },
});

module.exports = CardProduct;
