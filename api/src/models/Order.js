const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("order", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    date: {
      type: DataTypes.DATEONLY,
      defaultValue: DataTypes.NOW,
    },
  });
};
