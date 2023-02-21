import "dotenv/config";
import mongoose from "mongoose";

const admin_id = encodeURIComponent(process.env.MONGO_ADMIN_ID);
const admin_pwd = encodeURIComponent(process.env.MONGO_ADMIN_PASSWORD);
const mongoDBConnectionString = `mongodb+srv://${admin_id}:${admin_pwd}@${process.env.MONGO_CLUSTER}`;

export default async function connectToMongoDB() {
    mongoose.set("strictQuery", true);

    try {
        await mongoose.connect(mongoDBConnectionString);
        console.log("Verbunden mit MongoDB");
    } catch (error) {
        console.log(error);
    }
}

// const connectToMongoDB = () => {
//     mongoose.set("strictQuery", true);

//     mongoose
//         .connect(mongoDBConnectionString)
//         .then(() => console.log("Verbunden mit MongoDB"))
//         .catch((error) => console.log(error));
// };
