const { DataTypes } = require('sequelize');

module.export = (sequalize) => {
  sequalize.difine("seller", {
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
      allowNull: number,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      isEmail: true,
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
      default: true
    }
  });
};