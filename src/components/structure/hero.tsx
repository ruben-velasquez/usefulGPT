import Image from "next/image";
import { Gloock } from "next/font/google";
import Button from "../buttons/button";

const gloock = Gloock({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
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
      <h1 className={`${gloock.className} max-w-[600px] text-6xl text-center from-gray-300 via-gray-500 to-slate-300 bg-gradient-to-r bg-clip-text text-transparent`}>
        A personalized experience with <span className="text-blue-400">AI</span>
      </h1>
      <p className="text-gray-500">Let the AI tell you stories, make your homeworks and even more awesome things.</p>
      <div className="flex gap-2">
        <Button href="#">
          Try now
        </Button>
        <Button href="https://github.com/ruben-velasquez/UsefulGPT">
          View Github
        </Button>
      </div>
    </section>
  );
}
