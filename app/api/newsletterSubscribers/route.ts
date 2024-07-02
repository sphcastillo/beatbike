import { NextResponse } from "next/server";
import connectDB from '@/mongodb/db';
import { NewsletterSubscriber } from '@/mongodb/models/NewsletterSubscriber';

export interface AddNewsletterSubscriberRequest {
    email: string;
    createdAt: Date;
}

export async function POST(request: Request){

    const { email } : AddNewsletterSubscriberRequest = await request.json();
    const collectionName = 'newslettersubscribers';

    try {
        const collection = await connectDB(collectionName);

        const newsletterSubscriberData = {
            email,
            createdAt: new Date()
        }

        const data = await collection.insertOne(newsletterSubscriberData)
        return NextResponse.json({ data })
    } catch (error) {
        return NextResponse.json(
            { error: "ATTENTION: Error adding newsletter subscriber"},
            { status: 500 }
        );
    }

}