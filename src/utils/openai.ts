import OpenAI from "openai";


export async function generatePrompts(
  messages: Array<Object>
) {
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });
  
  let response;

  try {
    response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: messages as OpenAI.Chat.Completions.ChatCompletionMessageParam[],
    });
  } catch (error) {
    console.log(error);
    return "Error";
  }

  return response.choices[0].message.content || "Error";
}
