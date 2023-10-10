import { generatePrompts } from "@/utils/openai";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = (await request.json()) as PromptRequest;

  const streamResponse = await generatePrompts(body.messages, body.apiKey);

  return streamResponse;
}

type PromptRequest = {
  messages: Array<Object>;
  apiKey: string;
};
