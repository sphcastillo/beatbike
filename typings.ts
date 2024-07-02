export type Instructor = {
    id: number;
    name: string;
    imageUrl: any;
    instagramUrl: string;
    musicStyle: string;
    location1 : string;
    location2: string | null;
    spotifyUrl: string;
    bio: string;
    quote: string;
    favoriteArtist: string;
}

export interface NewsletterSubscriber {
    email: string;
    createdAt: Date;
}

export interface User {
    createdAt: Date;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phoneNumber: string;
    preferredLocation: string;
    birthDate: Date;
}