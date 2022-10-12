const { DataTypes } = require('sequelize');

module.export = (sequalize) => {
  sequalize.define("post", {
    id: {
      type: DataTypes.NUMBER,
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