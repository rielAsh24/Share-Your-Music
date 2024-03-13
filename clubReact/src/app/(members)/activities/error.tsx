"use client";

import { Button } from "@/components/ui/button";
import { useEffect } from "react";

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
    <div className="place-self-center grid grid-rows-2 gap-y-4 place-items-center">
      <h2 className="text-4xl">Something went wrong!</h2>
      <Button onClick={() => reset()}>Retry</Button>
    </div>
  );
}
