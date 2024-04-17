import { useState } from "react";
import { NavLink } from "react-router-dom";

import MenuButton from "@/assets/MenuButton.tsx";

export default function MobileMenu() {
  const [mMenu, setMMenu] = useState(false);

  return (
    <>
      <button className="hamburger" onClick={() => setMMenu(!mMenu)}>
        <MenuButton />
      </button>
      {mMenu ? (
        <div className="full-menu-mobile">
          <button className="close-hamburger" onClick={() => setMMenu(!mMenu)}>
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1.5396L21 21M1 20.4604L21 1"
                stroke="#1B1F3B"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <NavLink
            to="/"
            className="styled-buttons"
            onClick={() => setMMenu(!mMenu)}
          >
            Home
          </NavLink>
          <NavLink
            to="/events"
            className="styled-buttons"
            onClick={() => setMMenu(!mMenu)}
          >
            Events
          </NavLink>
          <NavLink
            to="/apply"
            className="styled-buttons"
            onClick={() => setMMenu(!mMenu)}
          >
            Apply
          </NavLink>
          <NavLink
            to="/login"
            className="styled-buttons"
            onClick={() => setMMenu(!mMenu)}
          >
            Login
          </NavLink>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
