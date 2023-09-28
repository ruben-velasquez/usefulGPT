"use client";
import React from "react";
import Image from "next/image";
import { Gloock } from "next/font/google";
import { utilities, JoinPrompt } from "../../../utils/utilities";
import TextField from "@/components/Inputs/text-field";
import TextArea from "@/components/Inputs/text-area";
import Button from "@/components/buttons/chat-button";

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
  const currentUtility = utilities.find(
    (utility) => utility.id === params.utility
  );

  return (
    <div className="p-5 flex items-center justify-center h-full relative flex-grow transition-all">
      <div className="absolute -z-1 top-0 w-full">
        <Image
          alt="background pattern effect"
          src="/chat-background-pattern.svg"
          width={800}
          height={800}
          className="h-auto w-full select-none"
        />
      </div>

      <div className="z-10 flex flex-col w-full h-full">
        <div className="flex-grow flex flex-col justify-start items-center p-10"></div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="grid gap-4 w-full"
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
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
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
