import { createContext, useState } from "react";

import Activities from "./Activities";
import Apply from "./Apply";
import Foot from "./components/SiteFooter";
import Home from "./Home";
import Menu from "./components/SiteNav";
import Login from "./Login";

import "./css/index.sass";

const RoleContext = createContext("guest");

export default function App() {
  const [role, setRole] = useState("guest");
  const [view, setView] = useState("Apply");

  const PageContent = () => {
    switch (view) {
      case "Activities":
        return <Activities />;
      case "Login":
        return <Login setRole={setRole} setView={setView} />;
      case "Apply":
        return <Apply />;
      case "Logout":
        return <Login setRole={setRole} setView={setView} />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="pageLayout">
      <RoleContext.Provider value={role}>
        <Menu setView={setView} />
      </RoleContext.Provider>
      <PageContent />
      <Foot />
    </div>
  );
}

export { RoleContext };
