import { activity } from "../typings/customtypes";

export default async function Activities() {
  const eventsList: activity[] | void = await fetch(
    "https://clubserver-jjjr6nralq-uc.a.run.app/activities",
    {
      method: "GET"
    }
  )
    .then((res: Response) => res.json())
    .then((events) => events as activity[])
    .catch((err: Error) => {
      throw new Error(err.message);
    });

  return (
    <div className="grid grid-flow-row grid-cols-3 gap-0.5">
      <h2 className="p-4 debug">Sr.No</h2>
      <h2 className="p-4 debug">Event</h2>
      <h2 className="p-4 debug">Date</h2>
      {eventsList.map((e: activity, i: number) => (
        <div key={i} className="col-span-3 grid grid-cols-3 gap-0.5">
          <span className="p-4 debug">{i + 1}</span>
          <span className="p-4 debug">{e.name}</span>
          <span className="p-4 debug">{e.date}</span>
        </div>
      ))}
    </div>
  );
}
