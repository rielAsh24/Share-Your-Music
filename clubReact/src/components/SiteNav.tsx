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

function Menu_Button({ setView, view }: { setView: Function; view: string }) {
  return (
    <li>
      <button onClick={() => setView(view)}>{view}</button>
    </li>
  );
}

export default function Menu({ setView }) {
  const role = useContext(RoleContext);
  const list = [
    <Menu_Button setView={setView} view="Home" />,
    <Menu_Button setView={setView} view="Activities" />,
  ];

  if (role === "guest") {
    list.push(<Menu_Button setView={setView} view="Login" />);
    list.push(<Menu_Button setView={setView} view="Apply" />);
  } else list.push(<Menu_Button setView={setView} view="Logout" />);

  return (
    <nav>
      <span>
        <h1>SYMC</h1>
      </span>
      <span>
        <ul className="full-menu">{list}</ul>
        <span className="sandwich-menu">
          <SandwichMenu />
          <SandwichMenu />
          <SandwichMenu />
        </span>
      </span>
    </nav>
  );
}
