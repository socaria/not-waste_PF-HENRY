const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("seller", {
    id: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,  
      primaryKey: true,
    },
    phone: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      isEmail: true,
      unique: true,
      primaryKey: true,
    },
    adress: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    cuit: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    image: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    category: {
      type: DataTypes.ENUM("panaderia", "restaurante", "supermercado"),
      allowNull: false,
      primaryKey: true,
    },
    enabled: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  });
};
