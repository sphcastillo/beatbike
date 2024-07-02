import { NextResponse } from "next/server";
import connectDB from '@/mongodb/db';
import { ContactMessage } from '@/mongodb/models/ContactMessage';

export interface AddContactMessageRequest {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
    createdAt: Date;
}

export async function POST(request: Request){
    
        const { firstName, lastName, email, message } : AddContactMessageRequest = await request.json();
        const collectionName = 'contactmessages';
    
        try {

            const collection = await connectDB(collectionName);
    
            const contactMessageData = {
                firstName,
                lastName,
                email,
                message,
                createdAt: new Date()
            }
    
            const data = await collection.insertOne(contactMessageData)
            return NextResponse.json({ data })
        } catch (error) {
            return NextResponse.json(
                { error: "ATTENTION: Error adding contact message"},
                { status: 500 }
            );
        }
}