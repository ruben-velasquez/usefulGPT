"use client";
import Link from "next/link";
import { MouseEventHandler } from "react";

export default function Button({ href, children, onClick }: ButtonProps) {
  return (
    <Link
      href={href || ""}
      onClick={onClick || ((e) => {})}
      className="bg-slate-200 transition-all hover:shadow-lg hover:shadow-green-500 font-bold py-3 px-8 rounded-full text-slate-900 flex items-center justify-center gap-2"
    >
        {children}
    </Link>
  );
}

type ButtonProps = {
  href?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  children: React.ReactNode;
};
