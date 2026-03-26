import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mark Gores - Product Builder",
  description:
    "22 years in real estate. Now shipping AI-powered products for agents and local communities.",
  openGraph: {
    title: "Mark Gores - Product Builder",
    description:
      "22 years in real estate. Now shipping AI-powered products for agents and local communities.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen bg-white text-zinc-900">{children}</body>
    </html>
  );
}
