import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Forcus Forge",
  description: "Welcome to the World of Focus Forge, where productivity meets creativity. Our platform is designed to help you forge your focus and achieve your goals with ease. Whether you're a student, professional, or entrepreneur, Focus Forge provides the tools and resources you need to stay on track and maximize your potential. Join us on this journey to unlock your full potential and forge a path to success.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{backgroundColor: "white"}} className={`${geistSans.variable} ${geistMono.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
