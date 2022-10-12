const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("manager", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
      },
      username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};