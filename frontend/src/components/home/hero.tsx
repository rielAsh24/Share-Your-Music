import Link from "next/link";

import { isAuth } from "@/actions/auth";
import { Button } from "@/components/ui/button";

export default async function Hero() {
  const isAuthenticated = await isAuth();

  return (
    <article className="grid w-full place-content-center gap-y-6">
      <img
        src="/hero.jpg"
        alt="Logo"
        className="aspect-auto rounded-lg lg:max-w-[1184px]"
      />
      <div className="grid gap-4 lg:grid-flow-col">
        <h1 className="text-4xl font-semibold text-primary lg:text-5xl lg:leading-tight">
          Symphony Music Club
        </h1>
        <p className="max-w-sm lg:justify-self-center">
          A club for music enthusiasts. We are divided by genres, united in
          Symphony.
        </p>
        {!isAuthenticated && (
          <Button className="w-32 lg:justify-self-end" asChild>
            <Link href="/apply">Register Now!</Link>
          </Button>
        )}
      </div>
    </article>
  );
}
