import Image from "next/image";
import { Gloock } from "next/font/google";
import Button from "../buttons/button";

const gloock = Gloock({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function AboutUtilities() {
  return (
    <section className="py-8 min-h-[calc(100vh-3.5rem)] px-[10px] md:px-4 flex items-center justify-center gap-8 relative">
      <div className="absolute -z-50">
        <Image
          alt="background spiral effect"
          src="/utilities-background.svg"
          width={800}
          height={800}
        />
      </div>
      <div className="flex flex-col gap-4 justify-center items-left text-left max-w-[500px]">
        <h1 className={`${gloock.className} text-6xl text-white`}>
          Get to know the{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-500">
            utilities
          </span>
        </h1>
        <p className="text-gray-400 text-xl">
          Use customized functionalities with tailor-made prompts to get better
          results to your.
        </p>
        <div className="flex gap-2">
          <Button href="/chat">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-message"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M8 9h8"></path>
              <path d="M8 13h6"></path>
              <path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z"></path>
            </svg>
            Try now
          </Button>
        </div>
      </div>
      <div className="bg-chatgpt-darkGray w-80 rounded-xl p-4 flex flex-col gap-3">
        <h3 className="text-slate-300 text-lg flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-message-code"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M8 9h8"></path>
            <path d="M8 13h6"></path>
            <path d="M11.012 19.193l-3.012 1.807v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v6"></path>
            <path d="M20 21l2 -2l-2 -2"></path>
            <path d="M17 17l-2 2l2 2"></path>
          </svg>
          Utilities
        </h3>
        <ul className="flex flex-col gap-3">
          <li className="text-white p-3 rounded-xl">
            <h4 className="text-lg flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-pencil"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4"></path>
                <path d="M13.5 6.5l4 4"></path>
              </svg>
              <span className="whitespace-nowrap overflow-hidden w-[80%] bg-gradient-to-r from-white via-white to-transparent text-transparent bg-clip-text">
                Write a post
              </span>
            </h4>
          </li>
          <li className="text-white p-3 rounded-xl">
            <h4 className="text-lg flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-code"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M7 8l-4 4l4 4"></path>
                <path d="M17 8l4 4l-4 4"></path>
                <path d="M14 4l-4 16"></path>
              </svg>
              <span className="whitespace-nowrap overflow-hidden w-[80%] bg-gradient-to-r from-white via-white to-transparent text-transparent bg-clip-text">
                Translate code
              </span>
            </h4>
          </li>
          <li className="text-white p-3 rounded-xl">
            <h4 className="text-lg flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-book"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0"></path>
                <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0"></path>
                <path d="M3 6l0 13"></path>
                <path d="M12 6l0 13"></path>
                <path d="M21 6l0 13"></path>
              </svg>
              <span className="whitespace-nowrap overflow-hidden w-[80%] bg-gradient-to-r from-white via-white to-transparent text-transparent bg-clip-text">
                Make a story
              </span>
            </h4>
          </li>
        </ul>
      </div>
    </section>
  );
}
