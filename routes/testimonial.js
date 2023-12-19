import { Router } from "express";
import testimonialController from "../controllers/testimonial.js";

const router = Router();

router.post("/create", testimonialController.createTestimonials);
router.get("/getAllTestimonials", testimonialController.getAllTestmonials);
export default router;
