import { Sequelize } from "sequelize";

export const testimonialModel = (sequelize) => {
  const { DataTypes } = Sequelize;
  return sequelize.define("testimonials", {
    fullName: {
      type: DataTypes.STRING,
    },
    avtar: {
      type: DataTypes.TEXT,
    },
    designation: {
      type: DataTypes.TEXT,
    },
    review: {
      type: DataTypes.STRING,
    },
    rating: {
      type: DataTypes.DECIMAL,
    },
  });
};
