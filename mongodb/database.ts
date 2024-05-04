import mongoose from 'mongoose';

const mongoDB_production= `mongodb+srv://sphcastillo:${process.env.MONGO_DB_PASSWORD}@subscriber.e0gcfvk.mongodb.net/Beatbike?retryWrites=true&w=majority&appName=subscriber`;
console.log('mongoDB_production: ', mongoDB_production);

const mongoDB_testing = `mongodb+srv://sphcastillo:${process.env.MONGO_DB_PASSWORD}@subscriber.e0gcfvk.mongodb.net/?retryWrites=true&w=majority&appName=subscriber`;
console.log('mongoDB_testing: ', mongoDB_testing);

const uri = process.env.NODE_ENV === 'test'
    ? mongoDB_testing
    : mongoDB_production;

if(!uri){
    throw new Error('ATTENTION: Please provide a connection string');
}

const connectDB = async () => {
    if(mongoose.connection?.readyState >= 1){
        console.log("--- Already connected to MongoDB ---");
        return;
    }

    try {
        await mongoose.connect(uri);
        console.log("--- CONGRATS ~ Connected to MongoDB ---");
    } catch(error){
        console.error("ATTENTION: Error connecting to MongoDB: ", error);
    }
}

export default connectDB;