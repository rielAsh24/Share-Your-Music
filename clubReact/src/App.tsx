import { createContext, useEffect, useState } from "react";
import { activity } from "./types/customtypes";

import Activities from "./app/Activities";
import Apply from "./app/Apply";
import Home from "./app/Home";
import Login from "./app/Login";

import Foot from "./components/SiteFooter";
import Menu from "./components/SiteNav";

import "@/styles/index.sass";
import { Route, Routes } from "react-router-dom";

const ActivityContext = createContext([]);

export default function App() {
  const [eventsList, setEvents] = useState<activity[] | undefined>([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_SERVER_HOME}/activities`, {
      method: "GET",
    })
      .then((res: Response) => res.json())
      .then((events: activity[]) => {
        setEvents(events);
      })
      .catch((err: Error) => {
        console.log(err);
      });
  }, []);

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
