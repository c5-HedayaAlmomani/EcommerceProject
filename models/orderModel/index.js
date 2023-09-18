const { DataTypes } = require("sequelize");
const sequelize = require("../sequelize");
const Card = require("../cardModel/index"); // Import the Cards model

const Order = sequelize.define("Order", {
  orderId: {
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
});

module.exports = Order;
