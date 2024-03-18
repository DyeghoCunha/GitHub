



import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import "./globals.css";
import { Aside } from '@/components/Aside'
import './globals.css'


const prompt = Prompt({
  weight: ["400", "600"],
  subsets: ["latin"],
  display:"swap"
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={prompt.className}>
      <body>
        <div className='app-container'>
          <Aside />
          {children}
        </div>
      </body>
    </html>
  );
}
