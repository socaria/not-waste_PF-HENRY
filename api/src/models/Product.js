const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("product", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    realValue: {
      type: DataTypes.INTEGER,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    stock: {
      type: DataTypes.INTEGER,
      min: 0,
    },
    imagen: {
      type: DataTypes.STRING,
      isUrl: true,
    },
  });
};
