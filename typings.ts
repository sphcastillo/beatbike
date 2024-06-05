export type Instructors = {
    // id: number;
    // name: string;
    // role: string;
    // imageUrl: any;
    // xUrl: string;
    // instagramUrl: string;
    instructors: Instructor[];
}

// export type Team = {
//     instructors: Instructor[];
// }

export type Instructor = {
    id: number;
    name: string;
    role: string;
    imageUrl: any;
    instagramUrl: string;
    musicStyle: string;
    spotifyUrl: string;
    bio: string;
    quote: string;
    favoriteArtist: string;
}