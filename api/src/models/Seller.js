const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("seller", {
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
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      isEmail: true,
      unique: true
    },
    adress: {
      type: DataTypes.STRING,
    },
    cuit: {
      type: DataTypes.INTEGER,
    },
    imagen: {
      type: DataTypes.STRING,
    },
    enabled: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    category: {
      type: DataTypes.ENUM("panadería", "restaurante", "supermercado"),
      allowNull: false,
    },
  });
};
