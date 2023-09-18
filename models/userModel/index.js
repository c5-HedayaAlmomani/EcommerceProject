const { DataTypes } = require("sequelize");
const sequelize = require("../sequelize");
const Card = require("../cardModel/index"); // Import the Cards model

const User = sequelize.define("User", {
  userId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  email: {
    type: DataTypes.TEXT,
    allowNull: false,
    unique: true,
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

module.exports = User;
