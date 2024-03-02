import type { Metadata } from "next";
import "@/styles/global.css";

import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Share Your Music Club",
  description: "A School Music Club you'd love to be a part of"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="container flex flex-col">
        <SiteNav />
        <main className="flex grow justify-center items-center">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
