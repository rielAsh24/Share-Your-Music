import { createContext, useEffect, useState } from "react";
import { activity } from "./customtypes";

import Activities from "./Activities";
import Apply from "./Apply";
import Foot from "./components/SiteFooter";
import Home from "./Home";
import Login from "./Login";
import Menu from "./components/SiteNav";

import "./css/index.sass";
import { Route, Routes } from "react-router-dom";

const ActivityContext = createContext([]);

export default function App() {
  const [eventsList, setEvents] = useState<activity[] | undefined>([]);

  // useEffect(() => {
  //   fetch("https://clubserver-jjjr6nralq-uc.a.run.app/activities", {
  //     method: "GET"
  //   })
  //     .then((res: Response) => res.json())
  //     .then((events: activity[]) => {
  //       setEvents(events);
  //     })
  //     .catch((err: Error) => {
  //       console.log(err);
  //     });
  // }, []);

  return (
    <div className="pageLayout">
      <Menu />
      <ActivityContext.Provider value={eventsList}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Activities />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </ActivityContext.Provider>
      <Foot />
    </div>
  );
}

export { ActivityContext };
