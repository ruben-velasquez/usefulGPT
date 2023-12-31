import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  generator: "Next.js",
  title: "UsefulGPT",
  colorScheme: "dark",
  keywords: ["ChatGPT", "IA", "Utilities", "OpenAI"],
  description:
    "This is a sophisticated chatbot interface empowered by OpenAI, designed to provide you with a range of helpful features.",
  creator: "Rubén Velásquez",
  openGraph: {
    title: 'Useful GPT',
    description: 'Fewer prompts more results',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
