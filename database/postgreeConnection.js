import { Sequelize } from "sequelize";
import { userModel } from "../model/user.js";
import { productModel } from "../model/product.js";
import { testimonialModel } from "../model/testimonial.js";
import pg from "pg";

export const db = async () => {
  const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialectModule: pg,
    dialect: "postgres",
    protocol: "postgres",
    // Uncomment this if your database requires SSL
    // dialectOptions: {
    //   ssl: {
    //     require: true,
    //     rejectUnauthorized: false,
    //   },
    // },
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
    // Return a fallback value in case of an error
    return { sequelize: null, User: null, Product: null, Testimonial: null };
  }
};
