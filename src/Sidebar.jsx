import React, { useState } from "react";
import { links, social } from "./data";
import { useGlobalContext } from "./Context.jsx";
import { FaTimes } from "react-icons/fa";
import logo from "./logo.svg";

const Sidebar = () => {
  const { showSidebar, setShowSidebar } = useGlobalContext();

  //   console.log(value);

  return (
    <aside className={showSidebar ? "sidebar show-sidebar" : "sidebar"}>
      <div className="sidebar-header">
        <img src={logo} alt="coding addict" />
        <button
          className="close-btn"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          <FaTimes />
        </button>
      </div>
      <ul className="links">
        {links.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <li className="link" key={id}>
              <a href={url}>
                <span className="icon">{icon}</span>
                {text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="social-links">
        {social.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <li className="social-link" key={id}>
              <a href={url}>
                <span>{icon}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
