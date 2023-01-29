import "dotenv/config";
import express from "express";
import cors from "cors";
import connectToMongoDB from "./mongodb/connectToMongoDB.js";

const PORT = process.env.PORT || "8080";

const server = express();
server.use(cors());
server.use(express.json({ limit: "25mb" }));

server.get("/", async (request, response) => {
    response.send("<h1>Hello World</h1>");
});

const startServerAndMongoDB = async () => {
    try {
        connectToMongoDB();
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
