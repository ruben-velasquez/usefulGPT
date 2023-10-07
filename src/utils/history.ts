type ChatHistory = {
  chats: ConcreteChat[];
};
export type ConcreteChat = {
  id: Number;
  title: string;
  content: string;
};

export function GetHistoryChats(): ChatHistory {
  const historyText = localStorage.getItem("History");

  if (!historyText) {
    localStorage.setItem("History", JSON.stringify({ chats: [] }));
    return { chats: [] };
  }

  return JSON.parse(historyText);
}

export function GetChatById(id: number): ConcreteChat | undefined {
  const history = GetHistoryChats();

  const chat = history.chats.find((chat) => chat.id === id);

  return chat;
}

export function AddChat(title: string, content: string) {
  const history = GetHistoryChats();

  const chat: ConcreteChat = {
    id: history.chats.length,
    title: title,
    content: content,
  };

  history.chats = history.chats.concat([chat]);

  localStorage.setItem("History", JSON.stringify(history));
}

export function DeleteChat(id: Number) {
  const history = GetHistoryChats();

  const filteredChats = history.chats.filter((chat) => chat.id !== id);

  history.chats = filteredChats;

  localStorage.setItem("History", JSON.stringify(history));
}
