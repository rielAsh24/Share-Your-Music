import type { Activity } from "@/lib/schemas";
import { allEvents } from "@/actions/activities";

import {
  Table,
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";

export default async function Activities() {
  const eventsList: Activity[] = await allEvents();

  return (
    <section className="flex w-full items-center justify-center">
      <Table className="max-w-lg border border-border">
        <TableCaption>A list of our upcoming events</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="">Sr.No</TableHead>
            <TableHead>Event</TableHead>
            <TableHead>Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {eventsList.map((e: Activity, i: number) => (
            <TableRow key={e._id}>
              <TableCell>{i + 1}</TableCell>
              <TableCell>{e.name}</TableCell>
              <TableCell>{new Date(e.date).toDateString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
}
