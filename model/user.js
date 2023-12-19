import { Sequelize } from "sequelize";

export const userModel = (sequelize) => {
  const { DataTypes } = Sequelize;

  return sequelize.define("user", {
    name: {
      type: DataTypes.TEXT,
    },
    password: {
      type: DataTypes.STRING(255),
    },
  });
};
