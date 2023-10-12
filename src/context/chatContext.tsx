"use client";
import React, { createContext, useState, useEffect } from "react";
import { AddChat, DeleteChat } from "@/utils/history";
import {
  GetHistoryChats,
  GetEmptyChats,
  type ChatHistory,
} from "@/utils/history";

type ChatContextType = {
  chatHistory: ChatHistory;
  createChat: (title: string, content: string) => void;
  deleteChat: (id: Number) => void;
};

export const ChatContext = createContext<ChatContextType>({
  chatHistory: GetEmptyChats(),
  createChat: () => {},
  deleteChat: () => {},
});

export const ChatProvider = ({ children }: { children: React.ReactNode }) => {
  const [chatHistory, setChatHistory] = useState(GetEmptyChats());

  useEffect(() => {
    setChatHistory(GetHistoryChats());
  }, []);

  const createChat = (title: string, content: string) => {
    setChatHistory(AddChat(title, content));
  };
  const deleteChat = (id: Number) => {
    setChatHistory(DeleteChat(id));
  };

  return (
    <ChatContext.Provider value={{ chatHistory, createChat, deleteChat }}>
      {children}
    </ChatContext.Provider>
  );
};
