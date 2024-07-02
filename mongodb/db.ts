import mongoose from 'mongoose';

const dbName: string = process.env.MONGO_DB_NAME || '';
console.log("dbName: ", dbName);

const connectionString = `mongodb+srv://sphcastillo:${process.env.MONGO_DB_PASSWORD}@beatbike.ctbxshe.mongodb.net/${dbName}?retryWrites=true&w=majority&appName=Beatbike`

if(!connectionString){
    throw new Error('ATTENTION: Please provide a connection string');
}

const connectDB = async (collectionName: string) => {
    if(mongoose.connection?.readyState >= 1){
        console.log("--- Already connected to MongoDB ---");
        return mongoose.connection.useDb(dbName).collection(collectionName)
    }

    try {
        await mongoose.connect(connectionString);
        console.log(`--- CONGRATS ~ Connected to MongoDB database: ${process.env.MONGO_DB_NAME} ---`)
        return mongoose.connection.useDb(dbName).collection(collectionName);
    } catch(error){
        console.error("ATTENTION: Error connecting to MongoDB: ", error);
        throw error;
    }
}

export default connectDB;
