# UsefulGPT

This is a chatbot interface powered by OpenAI API that introduces the utilities where you can create incredible things whithout writing many complex prompts, just using simple interfaces. It also allows you to save the chats in the browser's memory without creating an account.

## Installation
To use this project, you must follow the following steps:

1. Clone this repository to your local machine:
```git clone https://github.com/ruben-velasquez/usefulGPT```
2. Run the following command to install the dependencies:
```pnpm install```
3. Start the server
```pnpm run dev```
Or
```next dev```
4. Enjoy

## How to add utilities?

To add utilities you have to go to the file ```src/utils/utilities.ts``` and modify the array with the data described in the ```Utility``` type, a utility usually looks like this:

    {
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
    }
