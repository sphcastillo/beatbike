import { NextResponse } from "next/server";
import connectDB from '@/mongodb/db';
import { INewsletterSubscriber, NewsletterSubscriber } from '@/mongodb/models/NewsletterSubscriber';

export interface AddNewsletterSubscriberRequest {
    email: string;
}

export async function POST(request: Request){

    const { email } : AddNewsletterSubscriberRequest = await request.json();

    try {
        await connectDB();

        const newsletterSubscriberData = {
            email
        }

        const data = await NewsletterSubscriber.create(newsletterSubscriberData)
        return NextResponse.json({ data })
    } catch (error) {
        return NextResponse.json(
            { error: "ATTENTION: Error adding newsletter subscriber"},
            { status: 500 }
        );
    }

}