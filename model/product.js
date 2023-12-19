import { Sequelize } from "sequelize";

export const productModel = (sequelize) => {
  const { DataTypes } = Sequelize;
  return sequelize.define("products", {
    _id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    productName: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.DECIMAL,
    },
    edition: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.TEXT,
    },
    rating: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING,
    },
  });
};
