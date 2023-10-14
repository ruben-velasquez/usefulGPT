"use client";
import Link from "next/link";
import { MouseEventHandler } from "react";

export default function Button({ href, children, onClick }: ButtonProps) {
  return (
    <Link
      href={href || ""}
      onClick={onClick || ((e) => {})}
      className="bg-slate-200 text-sm md:text-lg whitespace-nowrap transition-all hover:shadow-lg hover:shadow-green-500 font-bold py-[12px] md:py-3 px-[15px] md:px-8 rounded-full text-slate-900 flex items-center justify-center gap-2"
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
