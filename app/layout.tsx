import type { Metadata } from "next";
import { Red_Hat_Text } from "next/font/google";
import "./globals.css";

const redHat = Red_Hat_Text({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Test Planner",
    default: "Test Planner"
  },
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={redHat.className}>{children}</body>
    </html>
  );
}
