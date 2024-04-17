'use server'
import { addSubscriber } from "@/mongodb/models/Subscriber";
import { revalidateTag } from "next/cache";

export async function createSubscriber(formData: FormData){
    const email = formData.get("email") as string;

    console.log("Subscribe email: ", email);

    if( !email ){
        throw new Error("Missing required field");
    }

    const newSubscriber = await addSubscriber(email);

    console.log("New subscriber: ", newSubscriber);

    revalidateTag("subscriberEmail");

    return JSON.stringify(newSubscriber);

}

export default createSubscriber;