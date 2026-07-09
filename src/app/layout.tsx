import type { Metadata, Viewport } from "next";
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
  title: "Craig Ferguson | Full-Stack Developer",
  description:
    "Personal portfolio of Craig Ferguson — full-stack developer crafting elegant, performant web experiences with React, Next.js, and TypeScript.",
  keywords: [
    "portfolio",
    "full-stack developer",
    "web developer",
    "React",
    "Next.js",
    "TypeScript",
  ],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const themeScript = `
(function () {
  try {
    var stored = localStorage.getItem("portfolio-theme");
    var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (stored === "dark" || (!stored && prefersDark)) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-screen overflow-x-hidden bg-slate-50 font-sans text-slate-700 antialiased transition-colors duration-300 dark:bg-slate-950 dark:text-slate-300">
        {children}
      </body>
    </html>
  );
}
