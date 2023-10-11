import Header from "@/components/structure/header";
import Hero from "@/components/structure/hero";
import AboutUtilities from "@/components/structure/about-utilities";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="absolute -top-[50px] -z-50 w-full opacity-25">
        <Image
          alt="background blur effect"
          src="/hero-svg-background.svg"
          width={600}
          height={300}
          className="w-full max-h-[100vh]"
        />
      </div>
      <Header />
      <Hero />
      <AboutUtilities />
    </>
  )
}
