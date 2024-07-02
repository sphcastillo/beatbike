import mongoose, { Schema, Document, models } from 'mongoose';

export interface IContactMessage extends Document {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
    createdAt: Date;
}

const ContactMessageSchema = new Schema<IContactMessage>(
    {
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        message: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

export const ContactMessage = 
models.ContactMessage || mongoose.model<IContactMessage>('ContactMessage', ContactMessageSchema);