import { NavLink } from "react-router-dom";

export default function DesktopMenu() {
  return (
    <div className="full-menu">
      <NavLink to="/" className="styled-buttons">
        Home
      </NavLink>
      <NavLink to="/events" className="styled-buttons">
        Events
      </NavLink>
      <NavLink to="/apply" className="styled-buttons">
        Apply
      </NavLink>
      <NavLink to="/login" className="styled-buttons">
        Login
      </NavLink>
    </div>
  );
}
