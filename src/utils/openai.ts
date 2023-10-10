import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse } from "ai";

export async function generatePrompts(messages: Array<Object>, apiKey: string) {
  const openai = new OpenAI({
    apiKey: apiKey,
  });

  let response = await openai.chat.completions.create({
    stream: true,
    model: "gpt-3.5-turbo",
    messages: messages as OpenAI.Chat.Completions.ChatCompletionMessageParam[],
  });

  const stream = OpenAIStream(response);

  return new StreamingTextResponse(stream);
}
