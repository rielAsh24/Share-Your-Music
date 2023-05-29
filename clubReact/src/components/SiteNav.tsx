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

function Menu_Button(props, value) {
  function isActive(name) {
    if (name === props.show) return "active";
    else return "";
  }

  return (
    <li key={value}>
      <button
        onClick={props.handler(props.role, value)}
        className={isActive(value)}
      >
        {value[0].toUpperCase() + value.slice(1)}
      </button>
    </li>
  );
}

function Menu(props) {
  let list = [Menu_Button(props, "home")];

  if (props.role === "guest") {
    list.push(Menu_Button(props, "activities"));
    list.push(Menu_Button(props, "login"));
    list.push(Menu_Button(props, "apply"));
  } else {
    list.push(Menu_Button(props, "edit activities"));
    list.push(Menu_Button(props, "logout"));
  }

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

export default Menu;
