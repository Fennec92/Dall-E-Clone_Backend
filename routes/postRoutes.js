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
        const allPosts = await Post.find({});
        response.json({ success: true, data: allPosts });
    } catch (error) {
        response.json({ success: false, error: error });
    }
});

postRouter.post("/", async (request, response) => {
    try {
        const { name, description, image } = request.body;

        const imageURL = await cloudinary.uploader.upload(image);

        const newPost = await Post.create({
            name: name,
            description: description,
            image: imageURL.url,
        });

        response.json({ success: true, data: newPost });
    } catch (error) {
        res.json({ success: false, error: error });
    }
});

export default postRouter;
