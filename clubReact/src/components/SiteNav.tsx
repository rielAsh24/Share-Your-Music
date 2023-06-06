import { useContext, useState } from "react";
import { RoleContext } from "../App";

import "../css/head_foot.sass";

const SandwichMenu = (): JSX.Element => {
  return (
    <svg
      width="40"
      height="5"
      viewBox="0 0 40 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="67" height="5" rx="2.5" fill="#283044" />
    </svg>
  );
};

export default function Menu({ setView }) {
  const role = useContext(RoleContext);
  const [mMenu, setMMenu] = useState(false);

  const list: string[] = ["Home", "Events"];
  const role_Tabs: string[] =
    role === "guest"
      ? list.concat(["Login", "Apply"])
      : list.concat(["Logout"]);

  return (
    <nav>
      <span className="logo-container">
        <h1 className="logo">SYMC</h1>
      </span>
      <div className="full-menu">
        <ul>
          {role_Tabs.map((view, i) => (
            <li key={i}>
              <button className="menu-buttons" onClick={() => setView(view)}>
                {view}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div onClick={() => setMMenu(!mMenu)} className="sandwich-menu">
        {mMenu ? (
          <span className="sandwich-expand">
            <button
              className="sandwich-menu-buttons"
              onClick={() => setMMenu(!mMenu)}
            >
              X
            </button>
            {role_Tabs.map((view, i) => (
              <button
                key={i}
                className="sandwich-menu-buttons"
                onClick={() => setView(view)}
              >
                {view}
              </button>
            ))}
          </span>
        ) : (
          <span className="sandwich-collapse">
            <SandwichMenu />
            <SandwichMenu />
            <SandwichMenu />
          </span>
        )}
      </div>
    </nav>
  );
}
