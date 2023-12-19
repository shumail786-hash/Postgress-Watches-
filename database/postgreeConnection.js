import { Sequelize } from "sequelize";
import { userModel } from "../model/user.js";
import { productModel } from "../model/product.js";
import { testimonialModel } from "../model/testimonial.js";
export const db = async () => {
  const sequelize = new Sequelize("test", "postgres", "123", {
    host: "localhost",
    dialect: "postgres",
  });
  let User = null;
  let Product = null;
  let Testimonial = null;
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully");
    User = await userModel(sequelize);
    Product = await productModel(sequelize);
    Testimonial = await testimonialModel(sequelize);
    await sequelize.sync();
    console.log("Table Created Successfully");
    return { sequelize, User, Product, Testimonial };
  } catch (error) {
    console.log("Unable to connect to database", error);
  }
};
