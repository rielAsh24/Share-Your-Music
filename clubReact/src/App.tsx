import { createContext, useEffect, useState } from "react";
import { activity } from "./types/customtypes";

import Activities from "./app/Activities";
import Apply from "./app/Apply";
import Home from "./app/Home";
import Login from "./app/Login";

import Foot from "./components/SiteFooter";
import Menu from "./components/SiteNav";

import "@/styles/index.sass";

const ActivityContext = createContext([]);

export default function App() {
  const [view, setView] = useState("Home");
  const [eventsList, setEvents] = useState<activity[] | undefined>([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_SERVER_HOME}/activities`, {
      method: "GET"
    })
      .then((res: Response) => res.json())
      .then((events: activity[]) => {
        setEvents(events);
      })
      .catch((err: Error) => {
        console.log(err);
      });
  }, []);

  const PageContent = () => {
    switch (view) {
      case "Events":
        return <Activities />;
      case "Apply":
        return <Apply />;
      case "Login":
        return <Login />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="pageLayout">
      <Menu setView={setView} />
      <ActivityContext.Provider value={eventsList}>
        <PageContent />
      </ActivityContext.Provider>
      <Foot />
    </div>
  );
}

export { ActivityContext };
