const { DataTypes } = requiere("sequelize");

module.export = (sequelize) => {
  sequelize.define("order", {
    id: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATEONLY,
      defaultValue: DataTypes.NOW,
    },
  });
};
