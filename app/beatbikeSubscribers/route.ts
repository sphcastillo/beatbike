import { fetchBeatbikeSubscribers } from "@/mongodb/models/BeatbikeSubscriber";
import { NextRequest, NextResponse } from "next/server";

export async function GET(){
    const beatbikeSubscribers = await fetchBeatbikeSubscribers();

    return NextResponse.json(beatbikeSubscribers);
}