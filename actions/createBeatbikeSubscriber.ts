'use server'

import { addBeatbikeSubscriber } from "@/mongodb/models/BeatbikeSubscriber";
import { revalidateTag } from "next/cache";

export async function createBeatbikeSubscriber(formData: FormData){
    const email = formData.get("email") as string;

    console.log("Beatbike Subscriber email: ", email);

    if( !email ){
        throw new Error("Missing required field");
    }

    const newBeatbikeSubscriber = await addBeatbikeSubscriber(email);

    console.log("New Beatbike subscriber: ", newBeatbikeSubscriber);

    revalidateTag("subscriberEmail");

    return JSON.stringify(newBeatbikeSubscriber);

}

export default createBeatbikeSubscriber;