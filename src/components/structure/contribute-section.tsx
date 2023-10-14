import { Gloock } from "next/font/google";
import Image from "next/image";
import Button from "../buttons/button";

const gloock = Gloock({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function ContributeSection() {
  return (
    <section className="py-8 min-h-[calc(100vh-3.5rem)] px-[20px] md:px-[10vw] flex flex-col md:flex-row items-center justify-center gap-8 relative">
      <div className="relative shadow-lineDivider overflow-hidden flex flex-col gap-4 items-center justify-center border-t pt-[60px] pb-5 px-[20px]">
        <div className="absolute -top-[10px] md:-top-[50px] -z-50 w-full opacity-25">
          <Image
            alt="background blur effect"
            src="/hero-svg-background.svg"
            width={600}
            height={300}
            priority={true}
            className="w-full max-h-[100vh]"
          />
        </div>
        <h1 className={`${gloock.className} text-4xl md:text-6xl text-white`}>
          Become part of the{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-500">
            Team
          </span>
        </h1>
        <p className="text-gray-400 text-sm md:text-xl">
          Support the AI revolution and the independent entrepreneurship
        </p>

        <div className="flex gap-2 flex-wrap justify-center items-center">
          <a
            href="https://www.producthunt.com/products/usefulgpt?utm_source=badge-follow&utm_medium=badge&utm_souce=badge-usefulgpt"
            target="_blank"
          >
            <Image
              src="https://api.producthunt.com/widgets/embed-image/v1/follow.svg?product_id=555522&theme=dark"
              alt="UsefulGPT - Fewer prompts more results | Product Hunt"
              style={{ width: "250px", height: "54px" }}
              width="250"
              height="54"
            />
          </a>
          <Button href="https://paypal.me/Rub3nVM">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-paypal"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              stroke-width={2}
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M10 13l2.5 0c2.5 0 5 -2.5 5 -5c0 -3 -1.9 -5 -5 -5h-5.5c-.5 0 -1 .5 -1 1l-2 14c0 .5 .5 1 1 1h2.8l1.2 -5c.1 -.6 .4 -1 1 -1zm7.5 -5.8c1.7 1 2.5 2.8 2.5 4.8c0 2.5 -2.5 4.5 -5 4.5h-2.6l-.6 3.6a1 1 0 0 1 -1 .8l-2.7 0a.5 .5 0 0 1 -.5 -.6l.2 -1.4"></path>
            </svg>
            Donate
          </Button>
        </div>
      </div>
    </section>
  );
}
