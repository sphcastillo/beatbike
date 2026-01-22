import type { StaticImageData } from "next/image";

export type Instructor = {
    id: number;
    name: string;
    imageSrc: StaticImageData;
    instagramUrl: string;
    musicStyle: string;
    location1 : string;
    location2: string | null;
    spotifyUrl: string;
    bio: string;
    quote: string;
    favoriteArtist: string;
    headshot: StaticImageData;
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