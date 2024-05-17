import type { Activity } from "@/lib/schemas";
import { allEvents } from "@/actions/activities";

import { Button } from "@/components/ui/button";
import { CardContent, Card } from "@/components/ui/card";

export default async function Activities() {
  const eventsList: Activity[] = await allEvents();

  return (
    <section className="grid w-full items-center justify-center gap-y-12 pt-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold lg:text-5xl">Harmonic Happenings</h2>
        <p className="pt-2">
          Join the rhythm, discover events & ignite your passion for music
        </p>
      </div>
      <div className="space-y-8">
        {eventsList.map((e: Activity) => (
          <Card
            key={e._id}
            className="p-3 shadow-none lg:max-w-screen-xl lg:p-4"
          >
            <CardContent className="flex flex-col items-start justify-between gap-8 lg:flex-row">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">{e.name}</h3>
                <p className="max-w-md text-muted-foreground">
                  Lorem ipsum dolor sit amet consectetur. Aliquam tincidunt sed
                  scelerisque sem sit arcu sit congue ac.
                </p>
              </div>
              <div className="lg:mt-2 lg:space-y-2">
                <h4 className="font-bold">Venue</h4>
                <p className="">University Hall</p>
              </div>
              <div className="lg:mt-2 lg:space-y-2">
                <h4 className="font-bold">Timings</h4>
                <p className="">{new Date(e.date).toDateString()}</p>
              </div>
              <Button className="max-sm:w-full lg:self-center" size="lg">
                Register
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
