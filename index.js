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
const PORT = 4000;

router(app);
app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
  db();
});
