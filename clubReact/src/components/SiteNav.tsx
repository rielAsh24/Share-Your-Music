import "../css/head_foot.sass";

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
      <div>
        <h1>SYMC</h1>
      </div>
      <div>
        <ul>{list}</ul>
      </div>
    </nav>
  );
}

export default Menu;
