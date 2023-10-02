import { generatePrompts } from "@/utils/openai";

export async function POST(request: Request) {
    const body = await request.json() as PromptRequest;

    const responseMessage = await generatePrompts(body.messages);
    
    return new Response(responseMessage);
}

type PromptRequest = {
    messages: Array<Object>;
}