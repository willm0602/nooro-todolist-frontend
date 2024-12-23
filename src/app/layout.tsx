import Header from "@/components/header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const interFont = Inter();

export const metadata: Metadata = {
  title: "Todo List",
  description: "App to manage to-do tasks",
  authors: [
    {
      name: "Will Migdol",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interFont.className} antialiased bg-lightBlack h-screen flex flex-col `}
      >
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <Header />
          <div className="w-11/12 md:w-8/12 mx-auto">{children}</div>
        </main>
      </body>
    </html>
  );
}
