import "dotenv/config";
import express from "express";
import { Configuration, OpenAIApi } from "openai";

const openAiRouter = express.Router();

const configuration = new Configuration({
    apiKey: process.env.OPEN_AI_API_KEY,
});

const openai = new OpenAIApi(configuration);

openAiRouter.get("/", (request, response) => {
    response.send("hello openai");
});

openAiRouter.post("/", async (request, response) => {
    try {
        const { description } = request.body;
        const openAiResponse = await openai.createImage({
            prompt: description,
            n: 1,
            size: "1024x1024",
            response_format: "b64_json",
        });
        const getImage = openAiResponse.data.data[0].b64_json;

        response.status(200).json({ image: getImage });
    } catch (error) {
        console.log(error);
        console.log(error?.response.data.error.message);
        response.status(500).send(error?.response.data.error.message);
    }
});

export default openAiRouter;
