"use client";
import React, { useContext } from "react";
import { Gloock } from "next/font/google";
import { utilities, JoinPrompt, JoinChatName } from "../../../utils/utilities";
import TextField from "@/components/Inputs/text-field";
import TextArea from "@/components/Inputs/text-area";
import Button from "@/components/buttons/chat-button";
import { CodeblockParser } from "@/utils/codeblock-parser";
import { useState } from "react";
import GptLogo from "@/components/logos/gpt-logo";
import { ChatContext } from "@/context/chatContext";

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
  const [loading, setLoading] = useState(false);
  const [answer, setAnswer] = useState("");
  const { createChat } = useContext(ChatContext);

  const currentUtility = utilities.find(
    (utility) => utility.id === params.utility
  );

  const resultingText = CodeblockParser(answer);

  const submitHandler: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    if (!currentUtility) return;

    const apiKey = localStorage.getItem("ApiKey");

    if (!apiKey) {
      alert(
        "Please, provide an OpenAI API Key via:\nhttps://platform.openai.com/account/api-keys"
      );
      return;
    }

    setLoading(true);

    const formData = new FormData(e.target as HTMLFormElement);

    const data = Object.fromEntries(formData.entries());

    const utilityFields = currentUtility.fields.forEach((field) => {
      field.content = data[field.id] as string;

      return field;
    });

    if (utilityFields != undefined) currentUtility.fields = utilityFields;

    const messages = [
      { role: "system", content: currentUtility?.system },
      { role: "user", content: JoinPrompt(currentUtility) },
    ];

    const response = await fetch("/api", {
      method: "POST",
      body: JSON.stringify({
        messages,
        apiKey,
      }),
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    // This data is a ReadableStream
    const _data = response.body;
    if (!_data) {
      return;
    }

    const reader = _data.getReader();
    const decoder = new TextDecoder();
    let done = false;
    let saved = false;

    while (!done) {
      const { value, done: doneReading } = await reader.read();
      done = doneReading;
      const chunkValue = decoder.decode(value);
      setAnswer((prev) => {
        if (done && !saved) {
          saved = true;
          createChat(JoinChatName(currentUtility), prev + chunkValue);
        }
        return prev + chunkValue;
      });
    }

    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center h-full relative flex-grow transition-all">
      <div className="z-10 flex flex-col overflow-y-scroll w-full h-full relative">
        <div className="w-full h-20 p-5 flex items-center justify-center bg-chatgpt-gray sticky top-0 z-10">
          <h1 className={`text-gray-400 text-base ${gloock.className}`}>
            UsefulGPT: {currentUtility?.name}
          </h1>
        </div>
        <div className="flex-grow relative w-full flex flex-col justify-start items-center text-left text-gray-200 py-5 px-32 bg-chatgpt-textBg">
          <GptLogo />

          {answer == "" ? (
            <p className="w-full">The answer will be displayed here</p>
          ) : (
            resultingText
          )}
        </div>
        <form onSubmit={submitHandler} className="grid gap-4 w-full p-5">
          {currentUtility?.fields.map((field, index) => (
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
          <Button active={!loading}>
            {loading ? (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-loader animate-spin"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M12 6l0 -3"></path>
                  <path d="M16.25 7.75l2.15 -2.15"></path>
                  <path d="M18 12l3 0"></path>
                  <path d="M16.25 16.25l2.15 2.15"></path>
                  <path d="M12 18l0 3"></path>
                  <path d="M7.75 16.25l-2.15 2.15"></path>
                  <path d="M6 12l-3 0"></path>
                  <path d="M7.75 7.75l-2.15 -2.15"></path>
                </svg>{" "}
                Loading
              </>
            ) : (
              <>
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
              </>
            )}
          </Button>
        </form>
      </div>
    </div>
  );
}
