import mongoose, { Schema, Document, models } from 'mongoose';

export interface INewsletterSubscriber extends Document {
    email: string;
}

const NewsletterSubscriberSchema = new Schema<INewsletterSubscriber>(
    {
        email: {
            type: String,
            required: true,
        },
    },

);

export const NewsletterSubscriber = 
models.NewsletterSubscriber || mongoose.model<INewsletterSubscriber>('NewsletterSubscriber', NewsletterSubscriberSchema);