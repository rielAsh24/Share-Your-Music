import React, { useState, useEffect } from "react";

const eventslist = require("../clubServer/eventData.json");
import "./css/activities.sass";

type event = {
  name: string;
  dates: string[];
};

// var eventsList: event[];

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

export default function AdminActivity() {
  const [eventsList, setEvent] = useState<event[] | undefined>([]);

  // useEffect(() => {
  //   fetch("http://localhost:3030/activities")
  //     .then((res) => res.json())
  //     .then((events) => {
  //       eventsList.concat(events);
  //     });
  // }, []);

  useEffect(() => {
    setEvent(eventslist);
    console.log(eventsList);
  });

  const [ename, setEname] = useState<string>("");
  const [edates, setDates] = useState<string[]>([]);

  const createEvent = () => {
    let postData: event = {
      name: ename,
      dates: edates,
    };

    fetch("http://localhost:3030/activities", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
        cookie: "",
      },
    });
    /*let newEvent =  <tr key={i}>
                        <td>{i + 1}</td>
                        <td><button onClick={this.deleteEvent.bind(this, i)}>
                                Delete
                            </button>
                        </td>
                        <td>{this.state.ename}</td>
                        <td>{this.state.dates}</td>
                    </tr>;
    let newEventList =  this.state.eventsList.concat(newEvent);
    this.setState({eventsList: newEventList});*/
  };

  const MockUp = () => {
    return (
      <form className="add_form" id="add_event">
        <h3>Manage Activities</h3>
        <label>Name</label>
        <input
          type="text"
          name="ename"
          value={ename}
          onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEname(e.target.value)
          }
        />
        <label>Date(s)</label>
        <input
          type="text"
          name="dates"
          value={edates}
          onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
            setDates([...edates, e.target.value])
          }
        />
        <button onClick={createEvent}>Add</button>
      </form>
    );
  };

  const Activity_table = () => {
    return (
      <table className="activity-table" cellPadding="20%">
        <thead>
          <tr>
            <th>Sr.No</th>
            <th>Manage</th>
            <th>Event</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {eventsList.map((e: event, i: number) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>
                <button onClick={() => deleteEvent(i)}>Delete</button>
              </td>
              <td>{e.name}</td>
              <td>{e.dates}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <section className="activityView">
      <MockUp />
      <Activity_table />
    </section>
  );
}
