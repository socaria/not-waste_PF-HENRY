const { DataTypes } = require('sequelize');

module.export = (sequalize) => {
  sequalize.define("product", {
    id: {
      type: DataTypes.NUMBER,
      primaryKey: true,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    realValue: {
      type: DataTypes.NUMBER
    },
    description: {
      type: DataTypes.STRING,
      allowNull: number,
    },
    category: {
      type: DataTypes.ENUM('frescos', 'panificados', 'plato preparado', 'snack', 'bebidas', 'otros'),
      allowNull: false,
    },
    stock: {
      type: DataTypes.NUMBER,
      min: 0,
    },
    imagen: {
      type: DataTypes.STRING,
      isUrl: true, 
    },
  });
};