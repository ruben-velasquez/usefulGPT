import ChatSidebar from "@/components/structure/chat-sidebar";
import { ChatProvider } from "@/context/chatContext";

export const dynamic = 'force-dynamic'

export default function ChatLayout({ children } : { children:React.ReactNode }) {
  return (
    <ChatProvider>
      <div className="bg-chatgpt-gray flex h-[100vh] overflow-hidden">
        <ChatSidebar />
        {children}
      </div>
    </ChatProvider>
  )
}

