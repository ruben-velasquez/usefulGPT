"use client";
import React, { createContext, useState, useEffect } from "react";
import { AddChat } from "@/utils/history";
import {
  GetHistoryChats,
  GetEmptyChats,
  type ChatHistory,
} from "@/utils/history";

type ChatContextType = {
  chatHistory: ChatHistory;
  createChat: (title: string, content: string) => void;
};

export const ChatContext = createContext<ChatContextType>({
  chatHistory: GetEmptyChats(),
  createChat: () => {},
});

export const ChatProvider = ({ children }: { children: React.ReactNode }) => {
  const [chatHistory, setChatHistory] = useState(GetEmptyChats());

  useEffect(() => {
    setChatHistory(GetHistoryChats());
  }, []);

  const createChat = (title: string, content: string) => {
    setChatHistory(AddChat(title, content));
  };

  return (
    <ChatContext.Provider value={{ chatHistory, createChat }}>
      {children}
    </ChatContext.Provider>
  );
};
