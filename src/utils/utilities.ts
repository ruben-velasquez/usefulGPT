export const utilities: Utility[] = [
  {
    id: "make-a-story",
    name: "Make A story",
    system: "Your answer must include a title (the story title) and all the content of your story. If you can't make a story about the information given, you must say: \"Error\".",
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
    name: "Code translation",
    system: "You have to translate code between programming languages, adapting the syntax and libraries to the target language. If you don't know the language or it doesn't exist, you have to say: \"Error\". If all goes well, your answer must contain only the resulting code. If the response is ok, you need to return the code between three quotes like this:  '''\ncode\n'''. You must add a line break at the end of each statement, acting as a code formatter. Instead of putting the programming language after the three quotes put it in a comment at the beginning of the code like: '''\n\/\/ Language\ncode\n\'\'\'",
    prompt:
      "Translate the following code from {sourceLanguage} to {targetLanguage}: {code}",
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
    name: "Write a post",
    system: "Create professional blog posts using the provided title, content and optional tags. If you can't create a post with the information provided, you'll have to say: \"Error\".",
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
  name: string;
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
export function JoinPrompt(utility: Utility | undefined): string {
  if(utility == undefined) return "Error";
  
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
