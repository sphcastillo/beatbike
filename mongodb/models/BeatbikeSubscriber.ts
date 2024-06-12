import mongoose, { Document, Schema, models, model } from 'mongoose';
import connectDB from '../db';

export interface BeatbikeSubscriber extends Document{
    email: string;
    createdAt: Date;
}


const beatbikeSubscriberSchema =  new mongoose.Schema<BeatbikeSubscriber>({
    email: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

const BeatbikeSubscriberModel = mongoose.model("BeatbikeSubscriber", beatbikeSubscriberSchema);

// const BeatbikeSubscriberModel = models.BeatbikeSubscriber || model<BeatbikeSubscriber>(
//     "BeatbikeSubscriber",
//     beatbikeSubscriberSchema
// )

if (!BeatbikeSubscriberModel) {
    console.log("BeatbikeSubscriberModel is undefined");
} else {
    console.log("BeatbikeSubscriberModel is defined");
}


// Function to add a Beatbike subscriber to the database
export async function addBeatbikeSubscriber(email: string): Promise<BeatbikeSubscriber>{
    await connectDB();

    try {
        // Create a new subscriber
        const subscriber = new BeatbikeSubscriberModel( { email })
        // Save the subscriber to the database
        await subscriber.save();
        // Return the subscriber
        return subscriber;
        
    }catch(error){
        console.error("Error adding subscriber: ", error);

        throw error;
    }
}

// Function to fetch all subscribers from the database
export async function fetchBeatbikeSubscribers(): Promise<BeatbikeSubscriber[]>{
    await connectDB();

    try {
        // Find all subscribers in the database
        const subscribers = await BeatbikeSubscriberModel.find();
        // Return the subscribers
        return subscribers;
        
    }catch(error){
        console.error("Error fetching subscribers: ", error);
        throw error;
    }
}