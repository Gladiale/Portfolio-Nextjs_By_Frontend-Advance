import "./globals.css";
import type { Metadata } from "next";
// Font Setup
import { Sora } from "next/font/google";
// Components
import Nav from "@/components/Nav";
import Header from "@/components/Header";
import TransitionParent from "@/components/TransitionParent";

// Font Settings
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
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
    <html lang="en">
      <body>
        <div
          className={`page text-black bg-site bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
        >
          <Nav />
          <Header />
          <TransitionParent>{children}</TransitionParent>
        </div>
      </body>
    </html>
  );
}
