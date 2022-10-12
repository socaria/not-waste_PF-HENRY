const { DataTypes } = requiere("sequelize");

module.export = (sequelize) => {
  sequelize.difine("manager", {
    user: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
  });
};
