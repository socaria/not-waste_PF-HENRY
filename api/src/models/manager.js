const { DataTypes } = requiere("sequelize");

module.export = (sequelize) => {
  sequelize.define("manager", {
    id: {
      type: DataTypes.NUMBER,
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
