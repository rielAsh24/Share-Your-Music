import type { Metadata } from "next";
import { ReactNode } from "react";

import "@/styles/global.css";

import Footer from "@/components/Footer";
import Navigation from "@/components/navigation/Navigation";

export const metadata: Metadata = {
  title: "Share Your Music Club",
  description: "A School Music Club you'd love to be a part of"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="container flex flex-col">
        <Navigation />
        <main className="flex grow size-full debug">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
