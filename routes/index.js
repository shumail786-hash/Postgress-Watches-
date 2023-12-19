import product from "./product.js";
import testimonial from "./testimonial.js";
export default function router(app) {
  app.use("/api/v1/product", product);
  app.use("/api/v1/testimonial", testimonial);
}
