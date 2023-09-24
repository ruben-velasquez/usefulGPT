import Image from "next/image";
import { Gloock } from "next/font/google";
import Button from "../buttons/button";

const gloock = Gloock({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function Hero() {
  return (
    <section className="py-3 md:px-[10vw] min-h-[calc(100vh-3.5rem)] relative flex flex-col gap-4 items-center justify-center">
      <div className="absolute -z-50">
        <Image
          alt="background blur effect"
          src="/hero-svg-background.svg"
          width={600}
          height={300}
        />
      </div>
      <h1
        className={`${gloock.className} max-w-[600px] text-6xl text-center text-white`}
      >
        A personalized experience with AI
      </h1>
      <p className="text-gray-400">
        Let the AI tell you stories, make your homeworks and even more awesome
        things.
      </p>
      <div className="flex gap-2">
        <Button href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-message"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M8 9h8"></path>
            <path d="M8 13h6"></path>
            <path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z"></path>
          </svg>
          Try now
        </Button>
        <Button href="https://github.com/ruben-velasquez/UsefulGPT">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-brand-github"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
          </svg>
          View Github
        </Button>
      </div>
    </section>
  );
}
