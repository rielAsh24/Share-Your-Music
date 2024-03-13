import {
  Table,
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { fetchAllActivities } from "@/actions/activities";
import { ActivityData } from "@/typings/customtypes";

export default async function Activities() {
  const eventsList: ActivityData[] = await fetchAllActivities();

  return (
    <section className="flex w-full items-center">
      <Table className="max-w-lg">
        <TableCaption>A list of our upcoming events</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="">Sr.No</TableHead>
            <TableHead>Event</TableHead>
            <TableHead>Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {eventsList.map((e: ActivityData, i: number) => (
            <TableRow key={e.name}>
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
