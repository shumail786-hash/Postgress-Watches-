import { db } from "../database/postgreeConnection.js";

const testimonialController = {
  createTestimonials: async (req, res) => {
    try {
      const { Testimonial } = await db();
      const testimonial = await Testimonial.create(req.body);
      return res.json({
        success: true,
        testimonial,
      });
    } catch (error) {
      console.log(error);
      return res.json({
        success: false,
        message: error.message,
      });
    }
  },
  getAllTestmonials: async (req, res) => {
    try {
      const { Testimonial } = await db();
      const testimonials = await Testimonial.findAll({});
      return res.json({
        success: true,
        data: testimonials,
      });
    } catch (error) {
      console.log(error);
      return res.json({
        success: false,
        message: "Unable to get Testimonials",
      });
    }
  },
};

export default testimonialController;
