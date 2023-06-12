import { useState } from "react";

import Activities from "./Activities";
import Apply from "./Apply";
import Foot from "./components/SiteFooter";
import Home from "./Home";
import Login from "./Login";
import Menu from "./components/SiteNav";

import "./css/index.sass";

export default function App() {
  const [view, setView] = useState("Home");

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
      <PageContent />
      <Foot />
    </div>
  );
}
