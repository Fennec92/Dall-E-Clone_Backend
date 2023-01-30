import "dotenv/config";
import express from "express";
import cloudinary from "cloudinary";
import Post from "../mongodb/models/post.js";

const postRouter = express.Router();

export default postRouter;
