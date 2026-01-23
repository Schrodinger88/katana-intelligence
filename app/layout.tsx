import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SmoothScrolling from "./components/SmoothScrolling";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Katana Intelligence | Future of Work",
  description: "Premium AI Automation & Workflow Orchestration.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased bg-background text-foreground overflow-x-hidden`}
      >
        <SmoothScrolling />
        {children}
      </body>
    </html>
  );
}
