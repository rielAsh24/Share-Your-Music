"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="grid grid-rows-2 place-items-center gap-y-4 place-self-center">
      <h2 className="text-4xl">Something went wrong!</h2>
      <Button onClick={() => reset()}>Retry</Button>
    </div>
  );
}
