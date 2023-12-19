import { db } from "../database/postgreeConnection.js";
import { where } from "sequelize";
const productController = {
  createMultipleProducts: async (req, res) => {
    try {
      const { Product } = await db();
      const products = await Product.bulkCreate(req.body);
      return res.json({
        success: true,
        message: "created successfully",
        products,
      });
    } catch (error) {
      console.log(error);
      return res.json({ success: false, message: error.message });
    }
  },
  getAllProducts: async (req, res) => {
    try {
      const { Product } = await db();
      const products = await Product.findAll({});
      return res.json({
        success: true,
        message: "All Products get Successfully",
        data: products,
      });
    } catch (error) {
      console.log(error);
      return res.json({
        success: false,
        message: error.message,
      });
    }
  },
  getSingleProduct: async (req, res) => {
    const { id } = req.query;
    console.log(id);
    try {
      const { Product } = await db();
      const product = await Product.findOne({ where: { _id: id } });
      return res.json({ success: true, data: product });
    } catch (error) {
      console.log(error);
      return res.json({
        success: false,
        message: error.message,
      });
    }
  },
};

export default productController;
