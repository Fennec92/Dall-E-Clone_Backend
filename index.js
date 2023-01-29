import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";

dotenv.config();

const server = express();
server.use(cors());
server.use(express.json({ limit: "25mb" }));

server.get("/", async (request, response) => {
    response.send("Hello World");
});

server.listen("8080", () => {
    console.log("Server online");
});
