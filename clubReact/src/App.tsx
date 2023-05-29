import { useState } from "react";

import Activities from "./Activities";
// import AdAct from "./AdminActivity";
import Apply from "./Apply";
import Foot from "./components/SiteFooter";
import Home from "./Home";
import Menu from "./components/SiteNav";
import Login from "./Login";

import "./css/index.sass";

export default function App() {
  const [role, setRole] = useState("guest");
  const [show, setShow] = useState("apply");

  const handleClick = () => {
    setRole(role);
    setShow(show);
  };

  const PageContent = () => {
    switch (show) {
      case "home":
        return <Home />;
      case "activities":
        return <Activities role={role} />;
      // case "edit activities":
      //   return <Activities role={"admin"} />;
      case "login":
        return <Login roleHandler={handleClick} />;
      case "apply":
        return <Apply />;
      case "logout":
        return <Login />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="pageLayout">
      <Menu role={role} show={show} handler={handleClick} />
      <PageContent />
      <Foot />
    </div>
  );
}
