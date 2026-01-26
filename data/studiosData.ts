import armWrestle from "@/images/studios/armWrestle.jpg";
import beatbikeBanner from "@/images/studios/beatbikeBanner.jpg";
import { StaticImageData } from "next/image";

export type Studio = {
    id: number;
    name: string;
    slug: string;
    streetAddress: string;
    cityStateZip: string;
    phone: string;
    studioImage: StaticImageData;
  };
  
  export const studiosData: Studio[] = [
  
    {
        id: 1,
        name: 'Tarzana',
        slug: "tarzana",
        streetAddress: '18700 Ventura Blvd',
        cityStateZip: 'Tarzana, CA 91356',
        phone: '+1 (818) 342-6030',
        studioImage: armWrestle,
    },
    {
        id: 2,
        name: 'Huntington Beach',
        slug: "huntington-beach",
        streetAddress: '7454 Edinger Ave',
        cityStateZip: 'Huntington Beach, CA 92647',
        phone: '+1 (714) 375-8777',
        studioImage: beatbikeBanner,
    }
]