const { DataTypes } = require("sequelize");
const sequelize = require("../sequelize");

const Card = sequelize.define("Card", {
  cardId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
});

module.exports = Card;
