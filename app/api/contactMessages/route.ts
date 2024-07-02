import { NextResponse } from "next/server";
import connectDB from '@/mongodb/db';
import { ContactMessage } from '@/mongodb/models/ContactMessage';

export interface AddContactMessageRequest {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
}

export async function POST(request: Request){
    
        const { firstName, lastName, email, message } : AddContactMessageRequest = await request.json();
    
        try {
            await connectDB();
    
            const contactMessageData = {
                firstName,
                lastName,
                email,
                message
            }
    
            const data = await ContactMessage.create(contactMessageData)
            return NextResponse.json({ data })
        } catch (error) {
            return NextResponse.json(
                { error: "ATTENTION: Error adding contact message"},
                { status: 500 }
            );
        }
}