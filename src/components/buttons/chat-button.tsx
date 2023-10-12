"use client";
import { MouseEventHandler } from "react";

export default function ChatButton({
  children,
  active = true,
}: ButtonProps) {
  return (
    <button
      disabled={!active}
      className="flex items-center justify-center gap-2 w-fit bg-slate-200 transition-all font-bold py-3 px-8 rounded-full text-slate-900"
    >
      {children}
    </button>
  );
}

type ButtonProps = {
  children: React.ReactNode;
  active?: boolean;
};
