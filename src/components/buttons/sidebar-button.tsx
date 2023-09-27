import { MouseEventHandler } from "react";

export default function SidebarButton({
  onClick,
  children,
  className,
  disabled
}: {
  onClick?: MouseEventHandler<HTMLButtonElement> | null;
  className?: string;
  disabled?: boolean;
  children: React.ReactNode;
}) {
  return (
    <button disabled={disabled || false} onClick={onClick || ((e) => {})} className={`${className || ""} text-base flex items-center justify-left gap-2 border rounded-lg border-chatgpt-midGray text-white p-3`}>
      {children}
    </button>
  );
}
