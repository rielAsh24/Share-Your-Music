import { useContext } from "react";
import { ActivityContext } from "@/App";
import { activity } from "@/types/customtypes";

import "@/styles/activities.sass";

export default function Activities() {
  const eventsList: activity[] = useContext(ActivityContext);

  return (
    <section className="activityView">
      <table className="activity-table">
        <thead>
          <tr>
            <th className="data-center">Sr.No</th>
            <th>Event</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {eventsList.map((e: activity, i: number) => (
            <tr key={i}>
              <td className="data-center">{i + 1}</td>
              <td className="data-center">{e.name}</td>
              <td>{e.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
