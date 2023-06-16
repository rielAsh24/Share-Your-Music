import { createContext, useEffect, useState } from "react";
import { activity } from "./customtypes";

import Activities from "./Activities";
import Apply from "./Apply";
import Foot from "./components/SiteFooter";
import Home from "./Home";
import Login from "./Login";
import Menu from "./components/SiteNav";

import "./css/index.sass";

const ActivityContext = createContext([]);

export default function App() {
  const [view, setView] = useState("Home");
  const [eventsList, setEvents] = useState<activity[] | undefined>([]);

  useEffect(() => {
    fetch("https://clubserver-jjjr6nralq-uc.a.run.app/activities", {
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
