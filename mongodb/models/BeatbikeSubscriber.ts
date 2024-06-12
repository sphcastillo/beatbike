import mongoose, { Document, Schema, models, model, Model } from 'mongoose';
import connectDB from '../db';

export interface IBeatbikeSubscriber extends Document{
    email: string;
    createdAt: Date;
}


const beatbikeSubscriberSchema = new Schema<IBeatbikeSubscriber>(
    {
        email: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        }
    }
);

export const BeatbikeSubscriberModel = (models.BeatbikeSubscriber)|| mongoose.model("BeatbikeSubscriber", beatbikeSubscriberSchema);



// Function to add a Beatbike subscriber to the database
export async function addBeatbikeSubscriber(email: string): Promise<IBeatbikeSubscriber>{
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
export async function fetchBeatbikeSubscribers(): Promise<IBeatbikeSubscriber[]>{
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