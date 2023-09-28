"use client";
import { MouseEventHandler } from "react";

export default function ChatButton({ href, children, onClick } : ButtonProps) {
  return (
    <a href={href || "#"} onClick={onClick || ((e) => {})} className="w-fit bg-slate-200 transition-all font-bold py-3 px-8 rounded-full text-slate-900">
        <button className="flex items-center justify-center gap-2">
            { children }
        </button>
    </a>
  )
}

type ButtonProps = {
    href?: string;
    onClick?: MouseEventHandler<HTMLAnchorElement>;
    children: React.ReactNode;
};