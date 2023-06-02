import { useContext } from "react";
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

  const list: string[] = ["Home", "Activities"];
  const role_Tabs: string[] =
    role === "guest"
      ? list.concat(["Login", "Apply"])
      : list.concat(["Logout"]);

  return (
    <nav>
      <span>
        <h1>SYMC</h1>
      </span>
      <span>
        <ul className="full-menu">
          {role_Tabs.map((view, i) => (
            <li key={i}>
              <button onClick={() => setView(view)}>{view}</button>
            </li>
          ))}
        </ul>
        <span className="sandwich-menu">
          <SandwichMenu />
          <SandwichMenu />
          <SandwichMenu />
        </span>
      </span>
    </nav>
  );
}
