const { DataTypes } = requiere("secualize");

module.export = (sequalize) => {
  sequalize.difine("city", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    postal: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
  });
};
