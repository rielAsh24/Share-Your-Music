import { ReactNode } from "react";

import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";

import Footer from "@/components/Footer";
import Navigation from "@/components/navigation/Navigation";
import { Toaster } from "@/components/ui/sonner";
import "@/styles/global.css";

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
        <div className="flex min-h-dvh flex-col">
          <Navigation />
          <main>{children}</main>
          <Toaster richColors />
        </div>
        <Footer />
      </body>
    </html>
  );
}
