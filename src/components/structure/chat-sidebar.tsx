"use client";
import SidebarButton from "../buttons/sidebar-button";
import { useState } from "react";

export default function ChatSidebar() {
  const [view, setView] = useState(true);

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
        <ul className="flex flex-col gap-3">
          <li>
            <a href="/chat/write-a-post" className="hover:bg-chatgpt-gray transition-colors text-white p-3 rounded-xl block">
              <h4 className="text-base flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-pencil text-slate-300"
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
                  <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4"></path>
                  <path d="M13.5 6.5l4 4"></path>
                </svg>
                Write a post
              </h4>
            </a>
          </li>
          <li>
            <a href="/chat/code-translation" className="hover:bg-chatgpt-gray transition-colors text-white p-3 rounded-xl block">
              <h4 className="text-base flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-code text-slate-300"
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
                  <path d="M7 8l-4 4l4 4"></path>
                  <path d="M17 8l4 4l-4 4"></path>
                  <path d="M14 4l-4 16"></path>
                </svg>
                Translate code
              </h4>
            </a>
          </li>
          <li>
            <a href="/chat/make-a-story" className="hover:bg-chatgpt-gray transition-colors text-white p-3 rounded-xl block">
              <h4 className="text-base flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-book text-slate-300"
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
                  <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0"></path>
                  <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0"></path>
                  <path d="M3 6l0 13"></path>
                  <path d="M12 6l0 13"></path>
                  <path d="M21 6l0 13"></path>
                </svg>
                Make a story
              </h4>
            </a>
          </li>
        </ul>
      </aside>
    </>
  );
}
