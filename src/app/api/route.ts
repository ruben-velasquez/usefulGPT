import { generatePrompts } from "@/utils/openai";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const body = await request.json() as PromptRequest;

    const responseMessage = await generatePrompts(body.messages);
    
    return NextResponse.json({message: responseMessage});
}

type PromptRequest = {
    messages: Array<Object>;
}