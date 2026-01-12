import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser";
import dotenv from "dotenv"
import { connectDB } from "./config/db.js";

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

// server start
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
