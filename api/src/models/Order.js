const { DataTypes } = requiere("sequelize");

module.export = (sequelize) => {
  sequelize.difine("shoppingOrders", {
    customerId: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATEONLY,
      defaultValue: DataTypes.NOW,
    },
  });
};
