const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define("post", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true,
    },
    date: {
      type: DataTypes.DATE,  
      allowNull: false,
      isAfter: new Date(),
    },
    amount: {
      type: DataTypes.INTEGER,
      min: 0,
      allowNull: false,
    },

  });
};