"use client";
import Link from "next/link";
import { MouseEventHandler } from "react";

export default function Button({ href, children, onClick } : ButtonProps) {
  return (
    <Link href={href || ""} onClick={onClick || ((e) => {})} className="bg-slate-200 shadow-md transition-all hover:scale-105 hover:shadow-lg hover:shadow-blue-500 shadow-slate-500 font-bold py-3 px-8 rounded-full text-slate-900">
        <button className="flex items-center justify-center gap-2">
            { children }
        </button>
    </Link>
  )
}

type ButtonProps = {
    href?: string;
    onClick?: MouseEventHandler<HTMLAnchorElement>;
    children: React.ReactNode;
};