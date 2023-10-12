import { ChatContext } from "@/context/chatContext";
import { useContext } from "react";

export default function DeleteChatButton({ chatId }: DeleteChatButtonProps) {
  const { deleteChat } = useContext(ChatContext);

  const onClickHandler: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();

    deleteChat(chatId);
  };

  return (
    <button
      onClick={onClickHandler}
      className="absolute flex items-center justify-center opacity-0 group-hover:opacity-100 right-[10px] p-2 rounded-lg bg-chatgpt-input  hover:bg-chatgpt-textBg text-slate-200 transition-all ease-in-out"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-trash"
        width={16}
        height={16}
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M4 7l16 0"></path>
        <path d="M10 11l0 6"></path>
        <path d="M14 11l0 6"></path>
        <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
        <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
      </svg>
    </button>
  );
}

type DeleteChatButtonProps = {
  chatId: Number;
};
