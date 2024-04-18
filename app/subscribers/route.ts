import { fetchSubscribers } from "@/mongodb/models/Subscriber";
import { NextRequest, NextResponse } from "next/server";

export async function GET(){
    const subscribers = await fetchSubscribers();

    return NextResponse.json(subscribers);
}