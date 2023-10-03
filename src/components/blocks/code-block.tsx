"use client";
import { useState } from "react";

function CodeBlock({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  const copyHandler = () => {
    setCopied(true);
    navigator.clipboard.writeText(code);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  return (
    <code className="rounded-lg overflow-hidden flex flex-col">
      <div className="bg-chatgpt-gray w-full h-12 flex items-center justify-between p-4 text-gray-300">
        <p>Code</p>
        <button className="flex items-center gap-2" onClick={copyHandler}>
          {copied ? (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-check"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M5 12l5 5l10 -10"></path>
              </svg>
              <p>Copied</p>
            </>
          ) : (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-clipboard"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2"></path>
                <path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"></path>
              </svg>
              <p>Copy</p>
            </>
          )}
        </button>
      </div>
      <span className="bg-gray-900 w-full flex-grow p-4 whitespace-pre-wrap">{code}</span>
    </code>
  );
}

export default CodeBlock;
