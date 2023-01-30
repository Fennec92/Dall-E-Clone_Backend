import "dotenv/config";
import express from "express";
import { v2 as cloudinary } from "cloudinary";
import Post from "../mongodb/models/post.js";

const postRouter = express.Router();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

postRouter.get("/", async (request, response) => {
    try {
    } catch (error) {}
});

postRouter.post("/", async (request, response) => {
    try {
    } catch (error) {}
});

export default postRouter;
