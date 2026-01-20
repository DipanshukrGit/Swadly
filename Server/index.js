import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser";
import dotenv from "dotenv"
import { connectDB } from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import menuRoutes from "./routes/menuRoutes.js";

dotenv.config()

const app = express();
//databse connection

connectDB()
const PORT=process.env.PORT


// middleware
app.use(express.json());
app.use(cors())
app.use(cookieParser())

// route
app.get("/", (req, res) => {
  res.send("Server is runnin");
});

app.use("/api/auth",authRoutes)
app.use("/api/category",categoryRoutes)
app.use("/api/menu", menuRoutes);

// server start
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
