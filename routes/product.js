import { Router } from "express";
import productController from "../controllers/product.js";

const router = Router();

router.post(
  "/createMultipleProducts",
  productController.createMultipleProducts
);

router.get("/getProducts", productController.getAllProducts);

router.get("/getSingleProduct", productController.getSingleProduct);
export default router;
