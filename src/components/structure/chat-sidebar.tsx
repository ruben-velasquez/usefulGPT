"use client";
import Link from "next/link";
import SidebarButton from "../buttons/sidebar-button";
import { useState, useEffect } from "react";
import ButtonInput from "../Inputs/button-input";
import { utilities } from "@/utils/utilities";
import { ChatContext } from "@/context/chatContext";
import { useContext } from "react";
import DeleteChatButton from "../Inputs/delete-chat-button";

export default function ChatSidebar() {
  const [view, setView] = useState(true);
  const [apiKeyItem, setApiKeyItem] = useState("");
  const { chatHistory } = useContext(ChatContext);

  useEffect(() => {
    // Perform localStorage action
    setApiKeyItem(localStorage.getItem("ApiKey") || "");
  }, []);

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    const apiKey = event.target.value;
    localStorage.setItem("ApiKey", apiKey);
  };

  return (
    <>
      <SidebarButton
        disabled={view}
        className={`disabled:opacity-0 opacity-100 transition-all absolute left-2 top-2 z-40 bg-chatgpt-midGray`}
        onClick={(e) => setView(!view)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-layout-sidebar text-white"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
          <path d="M9 4l0 16"></path>
        </svg>
      </SidebarButton>
      <aside
        className={`h-full flex bg-chatgpt-darkGray w-80 min-w-[20rem] p-4 transition-all z-50 ${
          view ? "animate-showSidebar" : "absolute animate-hideSidebar"
        } flex-col gap-3`}
      >
        <div className="flex gap-2">
          <SidebarButton className="col-span-2 flex-grow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-plus text-slate-400"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M12 5l0 14"></path>
              <path d="M5 12l14 0"></path>
            </svg>
            Request Utility
          </SidebarButton>
          <SidebarButton onClick={(e) => setView(!view)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-layout-sidebar text-slate-400"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
              <path d="M9 4l0 16"></path>
            </svg>
          </SidebarButton>
        </div>
        <h3 className="text-slate-300 text-base flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-message-code"
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
            <path d="M8 9h8"></path>
            <path d="M8 13h6"></path>
            <path d="M11.012 19.193l-3.012 1.807v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v6"></path>
            <path d="M20 21l2 -2l-2 -2"></path>
            <path d="M17 17l-2 2l2 2"></path>
          </svg>
          Utilities
        </h3>
        <ul className="flex flex-col h-1/4 gap-3 overflow-y-scroll">
          {utilities.map((utility, index) => (
            <li key={index}>
              <Link
                href={`/chat/${utility.id}`}
                className="hover:bg-chatgpt-gray transition-colors text-white p-3 rounded-xl block"
              >
                <h4 className="text-base flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-message-dots text-slate-300"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4"></path>
                    <path d="M12 11l0 .01"></path>
                    <path d="M8 11l0 .01"></path>
                    <path d="M16 11l0 .01"></path>
                  </svg>
                  <span className="whitespace-nowrap overflow-hidden w-[80%] bg-gradient-to-r from-white via-white to-transparent text-transparent bg-clip-text">
                    {utility.name}
                  </span>
                </h4>
              </Link>
            </li>
          ))}
        </ul>
        <h3 className="text-slate-300 text-base flex items-center gap-2 shadow-hideUp">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-history"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M12 8l0 4l2 2"></path>
            <path d="M3.05 11a9 9 0 1 1 .5 4m-.5 5v-5h5"></path>
          </svg>
          History
        </h3>
        <ul className="flex flex-col flex-grow h-1/4 gap-3 overflow-y-scroll overflow-x-hidden">
          {chatHistory.chats.map((chat, index) => (
            <li key={index}>
              <Link
                href={`/chat/history/${chat.id}`}
                className="hover:bg-chatgpt-gray transition-colors text-white p-3 rounded-xl flex items-center group relative"
              >
                <h4 className="text-base flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-messages"
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
                    <path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10"></path>
                    <path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2"></path>
                  </svg>
                  <span className="whitespace-nowrap overflow-hidden w-80 bg-gradient-to-r from-white via-white to-transparent text-transparent bg-clip-text">
                    {chat.title}
                  </span>
                </h4>
                <DeleteChatButton chatId={chat.id} />
              </Link>
            </li>
          ))}
        </ul>
        <div className="w-full mt-auto h-fit p-4 pb-0 border-t shadow-hideUp border-chatgpt-textBg">
          <ButtonInput
            value={apiKeyItem}
            onChange={handleInputChange}
            placeholder="Your API key"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-key"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M16.555 3.843l3.602 3.602a2.877 2.877 0 0 1 0 4.069l-2.643 2.643a2.877 2.877 0 0 1 -4.069 0l-.301 -.301l-6.558 6.558a2 2 0 0 1 -1.239 .578l-.175 .008h-1.172a1 1 0 0 1 -.993 -.883l-.007 -.117v-1.172a2 2 0 0 1 .467 -1.284l.119 -.13l.414 -.414h2v-2h2v-2l2.144 -2.144l-.301 -.301a2.877 2.877 0 0 1 0 -4.069l2.643 -2.643a2.877 2.877 0 0 1 4.069 0z"></path>
              <path d="M15 9h.01"></path>
            </svg>
          </ButtonInput>
        </div>
      </aside>
    </>
  );
}
