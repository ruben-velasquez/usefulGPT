"use client";
import { useEffect, useState } from "react";
import { GetChatById } from "@/utils/history";
import type { ConcreteChat } from "@/utils/history";
import { CodeblockParser } from "@/utils/codeblock-parser";
import { Gloock } from "next/font/google";

const gloock = Gloock({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function HistoryPage({ params }: { params: { chat: string } }) {
  const chatId = Number(params.chat);
  const [chat, setChat] = useState({
    id: 999,
    title: "",
    content: "",
  } as ConcreteChat);

  useEffect(() => {
    const _chat = GetChatById(chatId);

    if (_chat) setChat(_chat);
  }, [chatId]);

  return (
    <div className="flex items-center justify-center h-full relative flex-grow transition-all">
      <div className="z-10 flex flex-col overflow-y-scroll w-full h-full relative">
        <div className="w-full h-20 p-5 flex items-center justify-center bg-chatgpt-gray sticky top-0 z-10">
          <h1 className={`text-gray-400 text-base ${gloock.className}`}>
            UsefulGPT
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
              strokeWidth="2"
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

          {chat ? CodeblockParser(chat.content) : <p>Error 404: Not found</p>}
        </div>
      </div>
    </div>
  );
}
