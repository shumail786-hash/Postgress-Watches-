import express from "express";
import { db } from "./database/postgreeConnection.js";
import router from "./routes/index.js";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config({ path: ".env" });

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

router(app);
const PORT = process.env.PORT;

app.get("/", async (req, res) => {
  try {
    res.json({
      statusCode: 201,
      message: "Server is listening on PORT",
    });
  } catch (error) {
    res.json({
      statusCode: 404,
      message: "Can not get",
    });
  }
});

app.listen(PORT, async () => {
  console.log(`Server is listening on ${PORT}`);

  const { sequelize, User, Product, Testimonial } = await db();

  if (!sequelize || !User || !Product || !Testimonial) {
    console.error("Failed to initialize the database models.");
    process.exit(1); // Exit the app with failure status
  }

  console.log("Database connected successfully, starting the server...");
});
