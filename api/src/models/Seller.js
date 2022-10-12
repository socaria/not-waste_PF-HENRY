const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("seller", {
    id: {
      type: DataTypes.NUMBER,
      primaryKey: true,
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
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      isEmail: true,
    },
    // TODO cambiar datatype a ENUM con los partidos de buenos aires
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    adress: {
      type: DataTypes.STRING,
    },
    cuit: {
      type: DataTypes.NUMBER,
    },
    imagen: {
      type: DataTypes.STRING,
    },
    enabled: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    category: {
      type: DataTypes.ENUM("panadería", "restaurante", "supermercado"),
      allowNull: false,
    },
  });
};
