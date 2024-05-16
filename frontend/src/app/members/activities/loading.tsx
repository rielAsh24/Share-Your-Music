import type { Activity } from "@/lib/schemas";
import { allEvents } from "@/actions/activities";

import { CardContent, Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default async function Activities() {
  const eventsList: Activity[] = await allEvents();

  return (
    <section className="grid w-full items-center justify-center gap-y-12 pt-8">
      <div className="text-center">
        <Skeleton className="h-12 w-full" />
        <Skeleton className="h-4 w-full pt-2" />
      </div>
      <div className="space-y-8">
        {eventsList.map((e: Activity) => (
          <Card key={e._id} className="max-w-screen-xl p-4 shadow-none">
            <CardContent className="flex items-start justify-between gap-x-8">
              <div className="space-y-2">
                <Skeleton className="h-7 w-full" />
                <Skeleton className="h-4 w-60" />
                <Skeleton className="h-4 w-32" />
              </div>
              <div className="space-y-2">
                <Skeleton className="h-6 w-32" />
                <Skeleton className="h-4 w-24" />
              </div>
              <div className="space-y-2">
                <Skeleton className="h-6 w-32" />
                <Skeleton className="h-4 w-24" />
              </div>
              <Skeleton className="h-11 w-32 rounded-md px-8" />
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
