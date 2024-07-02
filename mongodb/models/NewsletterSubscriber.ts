import mongoose, { Schema, Document, models } from 'mongoose';

export interface INewsletterSubscriber extends Document {
    email: string;
    createdAt: Date;
}

const NewsletterSubscriberSchema = new Schema<INewsletterSubscriber>(
    {
        email: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

export const NewsletterSubscriber = 
models.NewsletterSubscriber || mongoose.model<INewsletterSubscriber>('NewsletterSubscriber', NewsletterSubscriberSchema);