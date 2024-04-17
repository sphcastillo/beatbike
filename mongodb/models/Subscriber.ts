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

export async function addSubscriber(email: string): Promise<Subscriber>{
    await connectDB();

    try {
        const newSubscriber = new SubscriberModel({ email });

        await newSubscriber.save();

        return newSubscriber;
        
    }catch(error){
        console.error("Error adding subscriber: ", error);
        throw error;
    }
}

