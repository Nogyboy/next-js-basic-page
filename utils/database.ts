import mongoose from "mongoose";

let isConnected: boolean = false;

export const connectToDatabase = async () => {

    mongoose.set('strictQuery', true);

    if (isConnected) {
        console.log('Mongo DB is already connected');
        return;
    }

    try {
        await mongoose.connect(process.env.MONGO_URI || '', {
            dbName:"share_prompt",
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
        });

        isConnected = true;
        console.log('Mongo DB connected');
    } catch (error) {
        console.log('Mongo DB connection error', error);
    }
};