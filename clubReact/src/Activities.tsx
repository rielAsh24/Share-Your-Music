import { useContext, useEffect, useState } from "react";
import { RoleContext } from "./App";

import "./css/activities.sass";

const eventslist = require("../clubServer/eventData.json");

type event = {
  name: string;
  dates: string[];
};

export default function Activities() {
  // var eventsList: event[];
  const [eventsList, setEvent] = useState<event[] | undefined>([]);
  const role = useContext(RoleContext);

  // useEffect(() => {
  //   fetch("http://localhost:3030/activities", {
  //     method: "GET",
  //   })
  //     .then((res: Response) => res.json())
  //     .then((events: event[]) => {
  //       // eventsList.concat(events);
  //       setEvent(events);
  //       // events.map((e: event, i: number) => {
  //       //   console.log(e.name);
  //       // });
  //     });
  // }, [eventsList]);

  useEffect(() => {
    setEvent(eventslist);
    console.log(eventsList);
  });

  function deleteEvent(eventid: number) {
    // fetch("http://localhost:3030/activities?delIndex=" + eventsList[eventid], {
    //   method: "DELETE",
    //   headers: {
    //     "Content-Type": "application/json",
    //     cookie: "",
    //   },
    // });
    /*let newEventList = this.state.eventsList.filter(eve => (eve.key !== i.toString()));
    this.setState({eventsList: newEventList});*/
  }

  const DeleteButton = (i: number) => {
    return (
      <td className="data-center">
        <button onClick={() => deleteEvent(i)}>Delete</button>
      </td>
    );
  };

  return (
    <section className="activityView">
      <table className="activity-table">
        <thead>
          <tr>
            <th className="data-center">Sr.No</th>
            <th>Event</th>
            <th>Dates</th>
          </tr>
        </thead>
        <tbody>
          {eventsList.map((e: event, i: number) => (
            <tr key={i}>
              <td className="data-center">{i + 1}</td>
              {role === "admin" ? DeleteButton(i) : ""}
              <td className="data-center">{e.name}</td>
              <td>{e.dates}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
