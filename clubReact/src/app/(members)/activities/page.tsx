import { ActivityData } from "../../../typings/customtypes";

export default async function Activities() {
  const eventsList: ActivityData[] | void = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/activities`,
    {
      method: "GET"
    }
  )
    .then((res: Response) => res.json())
    .then((events) => events as ActivityData[])
    .catch((err: Error) => {
      throw new Error(err.message);
    });

  return (
    <section className="grid grid-flow-row grid-cols-3 gap-0.5">
      <h2 className="p-4 debug">Sr.No</h2>
      <h2 className="p-4 debug">Event</h2>
      <h2 className="p-4 debug">Date</h2>
      {eventsList.map((e: ActivityData, i: number) => (
        <div key={e.name} className="col-span-3 grid grid-cols-3 gap-0.5">
          <span className="p-4 debug">{i + 1}</span>
          <span className="p-4 debug">{e.name}</span>
          <span className="p-4 debug">{new Date(e.date).toDateString()}</span>
        </div>
      ))}
    </section>
  );
}
