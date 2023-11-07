export const utilities: Utility[] = [
{
  "id": "code-precision",
  "chatName": "CodeCraft Pro",
  "name": "Code Precision",
  "system": "Your response must be strictly code-based when a code task is given. If you are unable to provide precise code, you must say: \"Error\".",
  "prompt": "Provide exact and precise code solutions in response to coding tasks. The code will encompass areas of expertise in Three.js, Next.js, React, Python, and will demonstrate the capability of handling complex algorithms and system architectures.",
  "fields": [
    {
      "id": "nextjs-task",
      "name": "Next.js Coding Task",
      "type": "text",
      "placeholder": "Enter a specific task for Next.js development"
    },
    {
      "id": "react-task",
      "name": "React Coding Task",
      "type": "text",
      "placeholder": "Enter a specific task for React development"
    },
    {
      "id": "python-task",
      "name": "Python Coding Task",
      "type": "text",
      "placeholder": "Enter a specific task for Python programming"
    },
    {
      "id": "threejs-task",
      "name": "Three.js Coding Task",
      "type": "text",
      "placeholder": "Enter a specific task for Three.js projects"
    },
    {
      "id": "language-comprehension-task",
      "name": "Language Comprehension Task",
      "type": "text",
      "placeholder": "Enter a task that requires comprehension of Hebrew in AI contexts"
    }
  ]
}
``` {
    id: "make-a-story",
    chatName: "{title}",
    name: "Make a story",
    system: "Your answer must include a title (the story title) and all the content of your story. If you can't make a story about the information given, you must say: \"Error\".",
    prompt: "Write a story named as {title}, with the following description: {description}",
    fields: [
      {
        id: "title",
        name: "Title",
        type: "text",
        placeholder: "Enter the title of your story",
      },
      {
        id: "description",
        name: "Story Description",
        type: "text",
        placeholder: "Enter a description of the story",
      },
    ],
  },
  {
    id: "code-translation",
    chatName: "Code from {sourceLanguage} to {targetLanguage}",
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
    chatName: "{title}",
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
  {
    id: "generate-code",
    chatName: "Generate Code",
    name: "Generate Code",
    system: "Generate code in any programming language. If you can't generate the code, please say: \"Error\". If all goes well, your answer must contain only the resulting code. If the response is ok, you need to return the code between three quotes like this:  '''\ncode\n'''.",
    prompt: "Generate code in the following programming language: {language}\nCode to Generate: {codeToGenerate}",
    fields: [
      {
        id: "language",
        name: "Language",
        type: "text",
        placeholder: "Enter the programming language",
      },
      {
        id: "codeToGenerate",
        name: "Code to Generate",
        type: "textarea",
        placeholder: "Enter the code to generate",
      },
    ],
  },
  {
    id: "recipe",
    chatName: "Recipe of {dish}",
    name: "Recipe",
    system: "Create recipes for various dishes and desserts. If you can't create the recipe, please say: \"Error\". The response should include the ingredients and the steps to make the recipe.",
    prompt: "Create a recipe for the following dish or dessert: {dish}",
    fields: [
      {
        id: "dish",
        name: "Dish",
        type: "text",
        placeholder: "Enter the dish or dessert",
      },
    ],
  },
  // Add more utility objects here if needed
];

type Utility = {
  id: string;
  chatName: string;
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

export function JoinChatName(utility: Utility | undefined): string {
  if(utility == undefined) return "Error";
  
  const chatName = utility.chatName;
  const fields = utility.fields;

  let joinedChatName = chatName;

  fields.forEach((field) => {
    const fieldName = `{${field.id}}`;
    const fieldValue = field.content || "";
    joinedChatName = joinedChatName.replace(fieldName, fieldValue);
  });

  return joinedChatName;
}
