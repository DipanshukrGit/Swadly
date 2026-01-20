import express from "express";

import {adminOnly} from "../middlewares/authMiddleware.js"
import upload from "../middlewares/multer.js"
import { addMenuItem, deleteMenuItem, updateMenuItem, getAllMenuItem } from "../controllers/menuControllers.js";


const menuRoutes=express.Router();

menuRoutes.post("/add",adminOnly,upload.single("image"),addMenuItem)
menuRoutes.put("/update/:id",adminOnly,upload.single("image"),updateMenuItem)
menuRoutes.delete("/delete/:id",adminOnly,deleteMenuItem)
menuRoutes.get("/all",getAllMenuItem)



export default menuRoutes;