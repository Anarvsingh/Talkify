import mongooes from "mongoose";

export const connectDB = async () => {
    try {
        await mongooes.connect(process.env.MONGODB_URI);
        console.log("mongo DB connected");
    } catch (error) {
        console.log("Some Issue in MongoDB");
        
    }
};