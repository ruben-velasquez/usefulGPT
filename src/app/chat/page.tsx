import { Gloock } from "next/font/google";
import Image from "next/image";

const gloock = Gloock({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function Chat() {
  return (
    <div className="p-5 flex items-center justify-center h-full relative flex-grow transition-all">
      <div className="absolute -z-1 top-0 w-full">
        <Image
          alt="background pattern effect"
          src="/chat-background-pattern.svg"
          width={800}
          height={800}
          className="h-auto w-full select-none"
        />
      </div>

      <div className="z-10">
        <h1
          className={`${gloock.className} text-6xl text-center text-chatgpt-textBg`}
        >
          UsefulGPT
        </h1>
      </div>
    </div>
  )
}
