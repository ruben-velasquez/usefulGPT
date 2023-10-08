import ChatSidebar from "@/components/structure/chat-sidebar";

export const dynamic = 'force-dynamic'

export default function ChatLayout({ children } : { children:React.ReactNode }) {
  return (
    <div className="bg-chatgpt-gray flex h-[100vh] overflow-hidden">
        <ChatSidebar />
        { children }
    </div>
  )
}
