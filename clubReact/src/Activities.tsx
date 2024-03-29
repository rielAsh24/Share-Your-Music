import { useContext, useEffect, useState } from "react";
import { RoleContext } from "./App";

import "./css/activities.sass";

type event = {
  key: number;
  name: string;
  date: string;
};

export default function Activities() {
  const [eventsList, setEvents] = useState<event[] | undefined>([]);
  const [newEvent, setNewEvent] = useState<event>({
    key: -1,
    name: "",
    date: ""
  });
  const role = useContext(RoleContext);

  useEffect(() => {
    fetch(import.meta.env.VITE_SERVER_HOME + "activities", {
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

  function deleteEvent(eventid: number) {
    const deleteBool = fetch(
      import.meta.env.VITE_SERVER_HOME + "activities?dI=1",
      {
        method: "DELETE"
      }
    )
      .then((res: Response) => {
        if (res.status == 204) {
          console.log(`Event ${eventsList[eventid]} Deleted`);
          setEvents(
            eventsList.filter((_: event, key: number) => key !== eventid)
          );
        }
      })
      .catch((err: Error) => {
        console.log(err);
      });
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
      {role === "admin" ? (
        <div>
          <form className="form_design">
            <span>
              <h3>Manage Activities</h3>
            </span>
            <span>
              <label>Name</label>
              <input
                type="text"
                name="ename"
                value={newEvent.name}
                onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setNewEvent({ ...newEvent, name: e.target.value })
                }
              />
            </span>
            <span>
              <label>Date</label>
              <input
                type="text"
                name="date"
                value={newEvent.date}
                onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setNewEvent({ ...newEvent, date: e.target.value })
                }
              />
            </span>
            <span>
              <button onClick={() => setEvents([...eventsList, newEvent])}>
                Add
              </button>
            </span>
          </form>
        </div>
      ) : (
        ""
      )}

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
                {role === "admin" ? DeleteButton(i) : ""}
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
