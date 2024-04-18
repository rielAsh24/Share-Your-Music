import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import { ReactNode } from "react";

import "@/styles/global.css";

import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Share Your Music Club",
  description: "A School Music Club you'd love to be a part of",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={nunitoSans.className}>
      <body>
        <Navigation />
        <Separator />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
