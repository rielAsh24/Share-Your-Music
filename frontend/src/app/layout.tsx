import type { Metadata } from "next";
import { ReactNode } from "react";

import "@/styles/global.css";

import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Share Your Music Club",
  description: "A School Music Club you'd love to be a part of",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <Separator />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
