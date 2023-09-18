const { DataTypes } = require("sequelize");
const sequelize = require("../sequelize");

const Brand = sequelize.define("Brand", {
  brandId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

module.exports = Brand;
