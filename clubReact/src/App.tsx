import { createContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import type { activity } from "./types/customtypes";
import "@/styles/index.sass";

import Activities from "./app/Activities.tsx";
import Apply from "./app/Apply.tsx";
import Home from "./app/Home.tsx";
import Login from "./app/Login.tsx";

import Foot from "./components/SiteFooter.tsx";
import Menu from "./components/SiteNav.tsx";

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
