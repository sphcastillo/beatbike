import mongoose from 'mongoose';


const connectionString = `mongodb+srv://sphcastillo:${process.env.MONGO_DB_PASSWORD}@newslettersubscriber.iyaf5cv.mongodb.net/?retryWrites=true&w=majority&appName=NewsletterSubscriber`
if(!connectionString){
    throw new Error('ATTENTION: Please provide a connection string');
}

const connectDB = async () => {
    if(mongoose.connection?.readyState >= 1){
        console.log("--- Already connected to MongoDB ---");
        return;
    }

    try {
        await mongoose.connect(connectionString);
        console.log("--- CONGRATS ~ Connected to MongoDB ---");
    } catch(error){
        console.error("ATTENTION: Error connecting to MongoDB: ", error);
    }
}

export default connectDB;
