import { Document, Schema, models, model } from 'mongoose';
import connectDB from '../db';

export interface Subscriber extends Document{
    email: string;
    createdAt: Date;
}


const subscriberSchema =  new Schema<Subscriber>({
    email: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

const SubscriberModel = models.Subscriber || model<Subscriber>("Subscriber", subscriberSchema);

// Function to add a subscriber to the database
export async function addSubscriber(email: string): Promise<Subscriber>{
    await connectDB();

    try {
        const subscriber = new SubscriberModel({ email });

        await subscriber.save();

        return subscriber;
        
    }catch(error){
        console.error("Error adding subscriber: ", error);
        throw error;
    }
}

// Function to fetch all subscribers from the database
export async function fetchSubscribers(): Promise<Subscriber[]>{
    await connectDB();

    try {
        // Find all subscribers in the database
        const subscribers = await SubscriberModel.find();
        // Return the subscribers
        return subscribers;
        
    }catch(error){
        console.error("Error fetching subscribers: ", error);
        throw error;
    }
}