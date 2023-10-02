"use client";
import { MouseEventHandler } from "react";

export default function ChatButton({ href, children, onClick, active=true } : ButtonProps) {

  const onClickHandler: MouseEventHandler<HTMLAnchorElement> = (e) => {
    if(active && onClick) {
      onClick(e);
    }
  }

  return (
    <a href={href || "#"} onClick={onClickHandler || ((e) => {})} >
        <button disabled={!active} className="flex items-center justify-center gap-2 w-fit bg-slate-200 transition-all font-bold py-3 px-8 rounded-full text-slate-900">
            { children }
        </button>
    </a>
  )
}

type ButtonProps = {
    href?: string;
    onClick?: MouseEventHandler<HTMLAnchorElement>;
    children: React.ReactNode;
    active?: boolean;
};