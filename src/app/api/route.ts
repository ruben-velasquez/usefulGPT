import { OpenAIStream, StreamingTextResponse } from "ai";
import { Configuration, OpenAIApi } from "openai-edge";

export const runtime = "edge";

export async function POST(req: Request) {
  const { messages, apiKey } = await req.json();

  const config = new Configuration({
    apiKey: apiKey,
  });
  const openai = new OpenAIApi(config);

  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    stream: true,
    messages,
  });

  const stream = OpenAIStream(response);
  return new StreamingTextResponse(stream);
}
