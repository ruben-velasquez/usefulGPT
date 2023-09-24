import { Gloock } from "next/font/google"

const gloock = Gloock({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export default function Header() {
  return (
    <header id="header" className="relative w-full overflow-hidden z-[99999]">
        <div className="relative w-full h-14 p-2 flex items-center justify-center text-white !bg-cover !bg-center overflow-hidden">
            <h2 className={`${gloock.className} text-lg`}>
              UsefulGPT
            </h2>
        </div>
    </header>
  )
}
