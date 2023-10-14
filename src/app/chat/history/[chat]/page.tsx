"use client";
import { useEffect, useState } from "react";
import { GetChatById } from "@/utils/history";
import type { ConcreteChat } from "@/utils/history";
import { CodeblockParser } from "@/utils/codeblock-parser";
import { Gloock } from "next/font/google";
import GptLogo from "@/components/logos/gpt-logo";

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
    <div className="flex items-center justify-center h-full relative flex-grow transition-all max-w-full">
      <div className="z-10 flex flex-col overflow-y-scroll w-full h-full relative">
        <div className="w-full h-20 p-5 flex items-center justify-center bg-chatgpt-gray sticky top-0 z-10">
          <h1 className={`text-gray-400 text-base ${gloock.className}`}>
            UsefulGPT
          </h1>
        </div>
        <div className="flex-grow relative w-full flex flex-col justify-start items-center text-left text-gray-200 p-[20px] md:py-5 md:px-32 bg-chatgpt-textBg">
          <GptLogo />

          {chat ? CodeblockParser(chat.content) : <p>Error 404: Not found</p>}
        </div>
      </div>
    </div>
  );
}
