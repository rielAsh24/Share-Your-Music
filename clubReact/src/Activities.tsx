import { useEffect, useState } from "react";

import "./css/activities.sass";

type event = {
  name: string;
  date: string;
};

export default function Activities() {
  const [eventsList, setEvents] = useState<event[] | undefined>([]);

  useEffect(() => {
    fetch("https://clubserver-jjjr6nralq-uc.a.run.app" + "/activities", {
      method: "GET"
    })
      .then((res: Response) => res.json())
      .then((events: event[]) => {
        setEvents(events);
      })
      .catch((err: Error) => {
        console.log(err);
      });
  }, []);

  return (
    <section className="activityView">
      <div>
        <table className="activity-table">
          <thead>
            <tr>
              <th className="data-center">Sr.No</th>
              <th>Event</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {eventsList.map((e: event, i: number) => (
              <tr key={i}>
                <td className="data-center">{i + 1}</td>
                <td className="data-center">{e.name}</td>
                <td>{e.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
