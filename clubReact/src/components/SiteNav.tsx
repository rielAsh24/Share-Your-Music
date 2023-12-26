import { useState } from "react";
import { NavLink } from "react-router-dom";

import "@/styles/head_foot.sass";

export default function Menu() {
  const [mMenu, setMMenu] = useState(false);

  return (
    <nav>
      <span className="logo-container">
        <h1 className="logo">SYMC</h1>
      </span>
      <button className="hamburger" onClick={() => setMMenu(!mMenu)}>
        <svg
          width="30"
          height="20"
          viewBox="0 0 30 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 1.66667C0 0.746192 0.746192 0 1.66667 0H28.3333C29.2538 0 30 0.746192 30 1.66667C30 2.58714 29.2538 3.33333 28.3333 3.33333H1.66667C0.746193 3.33333 0 2.58714 0 1.66667ZM0 10C0 9.07952 0.746192 8.33333 1.66667 8.33333H28.3333C29.2538 8.33333 30 9.07952 30 10C30 10.9205 29.2538 11.6667 28.3333 11.6667H1.66667C0.746193 11.6667 0 10.9205 0 10ZM0 18.3333C0 17.4129 0.746192 16.6667 1.66667 16.6667H28.3333C29.2538 16.6667 30 17.4129 30 18.3333C30 19.2538 29.2538 20 28.3333 20H1.66667C0.746193 20 0 19.2538 0 18.3333Z"
            fill="#1B1F3B"
          />
        </svg>
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
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </button>
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
      ) : (
        <></>
      )}
    </nav>
  );
}
