import type { Activity } from "@/lib/schemas";
import { allEvents } from "@/actions/activities";

import { Button } from "@/components/ui/button";
import { CardContent, Card } from "@/components/ui/card";

export default async function Activities() {
  const eventsList: Activity[] = await allEvents();

  return (
    <section className="grid w-full items-center justify-center gap-y-12 pt-8">
      <div className="text-center">
        <h2 className="text-5xl font-bold leading-tight">
          Harmonic Happenings
        </h2>
        <p className="pt-2">
          Join the rhythm, discover events & ignite your passion for music
        </p>
      </div>
      <div className="space-y-8">
        {eventsList.map((e: Activity) => (
          <Card key={e._id} className="max-w-screen-xl p-4 shadow-none">
            <CardContent className="flex items-start justify-between gap-x-8">
              <div className="space-y-2">
                <h3 className="text-2xl font-semibold">{e.name}</h3>
                <p className="max-w-lg">
                  Lorem ipsum dolor sit amet consectetur. Aliquam tincidunt sed
                  scelerisque sem sit arcu sit congue ac.
                </p>
              </div>
              <div className="mt-2 space-y-2">
                <h4 className="font-bold">Venue</h4>
                <p className="">University Hall</p>
              </div>
              <div className="mt-2 space-y-2">
                <h4 className="font-bold">Timings</h4>
                <p className="">{new Date(e.date).toDateString()}</p>
              </div>
              <Button className="self-center" size="lg">
                Register
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
