export const utilities: Utility[] = [
  {
    id: "make-a-story",
    system: "Make stories about any topic, your response must have a title (the story title) and all the content of their story",
    prompt: "Write a {adjective} and {adjective} story about {noun}.",
    fields: [
      {
        id: "adjective",
        name: "Adjective",
        type: "text",
        placeholder: "Enter an adjective",
      },
      {
        id: "noun",
        name: "Noun",
        type: "text",
        placeholder: "Enter a noun",
      },
    ],
  },
  {
    id: "code-translation",
    system: "You must translate code between programming languages adapting syntax and libraries to the target language. Your response must be like this:\n[TargetLanguage]\n[Code] ",
    prompt:
      "Translate the following code from {sourceLanguage} to {targetLanguage}: {code}.",
    fields: [
      {
        id: "sourceLanguage",
        name: "Source Language",
        type: "text",
        placeholder: "Enter the source language",
      },
      {
        id: "targetLanguage",
        name: "Target Language",
        type: "text",
        placeholder: "Enter the target language",
      },
      {
        id: "code",
        name: "Code",
        type: "textarea",
        placeholder: "Enter the code to translate",
      },
    ],
  },
  {
    id: "write-a-post",
    system: "Create professional blog posts with the provided title, content, and optional tags",
    prompt: "Write a professional blog post with the following details:\n\nTitle: {title}\nContent: {postContent}\nTags: {tags}",
    fields: [
      {
        id: "title",
        name: "Title",
        type: "text",
        placeholder: "Enter the title",
      },
      {
        id: "postContent",
        name: "Post Content",
        type: "textarea",
        placeholder: "Enter the content",
      },
      {
        id: "tags",
        name: "Tags",
        type: "text",
        placeholder: "Enter tags (optional)",
      },
    ],
  },
  // Add more utility objects here if needed
];

type Utility = {
  id: string;
  system: string;
  prompt: string;
  fields: UtilityField[];
};

type UtilityField = {
  id: string;
  name: string;
  placeholder: string;
  content?: string | null;
  type: "textarea" | "text";
};

// Gets all the utilityField names enclosed in brackets in the prompt and replaces them with
// the corresponding content
// e.g. The {color} leaf is beautiful => The red leaf is beautiful
export function JoinPrompt(utility: Utility): string {
  const prompt = utility.prompt;
  const fields = utility.fields;

  let joinedPrompt = prompt;

  fields.forEach((field) => {
    const fieldName = `{${field.id}}`;
    const fieldValue = field.content || "";
    joinedPrompt = joinedPrompt.replace(fieldName, fieldValue);
  });

  return joinedPrompt;
}
