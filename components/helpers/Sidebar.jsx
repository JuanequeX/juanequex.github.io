"use client"

import React, { useEffect } from "react";
import HeaderItem from '@/components/helpers/headerItemMobile'
import classNames from "classnames";

const Sidebar = ({ toggle, isOpen }) => {
  const linkClasses = classNames("sidebar__format", {
    "sidebar__is-open": toggle,
  });

  const overlayClass = classNames("sidebar__overlay", {
    "sidebar__is-open-overlay": toggle,
  });

  useEffect(() => {
    toggle
      ? (document.body.style.overflowY = "hidden")
      : (document.body.style.overflowY = "scroll");
  }, [toggle]);

  return (
    <div className="sidebar">
      <div className={linkClasses}>
        <div className="sidebar-container">
          <ul>
            <li>
              <HeaderItem
                goTo="home"
                text="Home"
                itemClass="sidebar-container__link"
                isOpen={isOpen}
              />
            </li>
            <li>
              <HeaderItem
                goTo="about"
                text="About Me"
                itemClass="sidebar-container__link"
                isOpen={isOpen}
              />
            </li>
            <li>
              <HeaderItem
                goTo="roadmap"
                text="Roadmap"
                itemClass="sidebar-container__link"
                isOpen={isOpen}
              />
            </li>
             <li>
              <HeaderItem
                goTo="contact"
                text="Contact"
                itemClass="sidebar-container__link"
                isOpen={isOpen}
              />
            </li>
          </ul>
        </div>
      </div>
      {toggle ? (
        <div
          className={overlayClass}
          onClick={() => (toggle ? isOpen() : null)}
        />
      ) : null}
    </div>
  );
};

export default Sidebar;
