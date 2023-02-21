import "dotenv/config";
import express from "express";
import cors from "cors";
import connectToMongoDB from "./mongodb/connectToMongoDB.js";
import postRoutes from "./routes/postRoutes.js";
import openAiRoutes from "./routes/openAiRoutes.js";

const PORT = process.env.PORT || "8080";
const server = express();

server.use(cors());
server.use(express.json({ limit: "25mb" }));
server.use("/api/post", postRoutes);
server.use("/api/openai", openAiRoutes);

server.get("/", async (request, response) => {
    response.send("<h1>Hello World</h1>");
});

const startServerAndMongoDB = async () => {
    try {
        await connectToMongoDB();
        server.listen(PORT, () => {
            console.log(`Server ist online auf dem Port ${PORT}`);
        });
    } catch (error) {
        console.log(
            `Server auf dem Port ${PORT} hat folgenden Fehler: ${error}`,
        );
    }
};

startServerAndMongoDB();
