"use client";
import React from "react";
import { Gloock } from "next/font/google";
import { utilities, JoinPrompt } from "../../../utils/utilities";
import TextField from "@/components/Inputs/text-field";
import TextArea from "@/components/Inputs/text-area";
import Button from "@/components/buttons/chat-button";
import CodeBlock from "@/components/blocks/code-block";
import { useState } from "react";

const gloock = Gloock({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function UtilityChat({
  params,
}: {
  params: { utility: string };
}) {
  const [answer, setAnswer] = useState("");
  const currentUtility = utilities.find(
    (utility) => utility.id === params.utility
  );

  const resultingText: React.JSX.Element = (
    <div className="w-full grid gap-2">
      {answer.split("´´´")?.map((textSnippet, index) => (
        <>
          {index % 2 == 1 ? (
            <CodeBlock key={index} code={textSnippet} />
          ) : (
            <p key={index}>{textSnippet}</p>
          )}
        </>
      ))}
    </div>
  );

  return (
    <div className="flex items-center justify-center h-full relative flex-grow transition-all">
      <div className="z-10 flex flex-col overflow-y-scroll w-full h-full relative">
        <div className="w-full h-20 p-5 flex items-center justify-center bg-chatgpt-gray sticky top-0">
          <h1 className={`text-gray-400 text-base ${gloock.className}`}>
            UsefulGPT: {currentUtility?.name}
          </h1>
        </div>
        <div className="flex-grow relative w-full flex flex-col justify-start items-center text-left text-gray-200 py-5 px-32 bg-chatgpt-textBg">
          <div className="absolute left-16 h-10 w-10 flex items-center justify-center bg-green-500 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-openai"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M11.217 19.384a3.501 3.501 0 0 0 6.783 -1.217v-5.167l-6 -3.35"></path>
              <path d="M5.214 15.014a3.501 3.501 0 0 0 4.446 5.266l4.34 -2.534v-6.946"></path>
              <path d="M6 7.63c-1.391 -.236 -2.787 .395 -3.534 1.689a3.474 3.474 0 0 0 1.271 4.745l4.263 2.514l6 -3.348"></path>
              <path d="M12.783 4.616a3.501 3.501 0 0 0 -6.783 1.217v5.067l6 3.45"></path>
              <path d="M18.786 8.986a3.501 3.501 0 0 0 -4.446 -5.266l-4.34 2.534v6.946"></path>
              <path d="M18 16.302c1.391 .236 2.787 -.395 3.534 -1.689a3.474 3.474 0 0 0 -1.271 -4.745l-4.308 -2.514l-5.955 3.42"></path>
            </svg>
          </div>

          {answer == "" ? (<p className="w-full">The answer will be displayed here</p>) : resultingText}
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="grid gap-4 w-full p-5"
        >
          {currentUtility?.fields.map((field) => (
            <div key={field.id}>
              {field.type === "textarea" ? (
                <TextArea
                  name={field.id}
                  label={field.name}
                  placeholder={field.placeholder}
                />
              ) : (
                <TextField
                  name={field.id}
                  label={field.name}
                  placeholder={field.placeholder}
                />
              )}
            </div>
          ))}
          <Button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-send"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M10 14l11 -11"></path>
              <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5"></path>
            </svg>
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}
