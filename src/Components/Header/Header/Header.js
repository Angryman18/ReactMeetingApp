import React from "react";
import style from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className={style.mainHeader}>
      <div className={style.main}>
        <div className={style.logo}>
          <NavLink to="/allmeetup">
              <span id={style.logo__text}>Meeting App</span>
            </NavLink>
        </div>
        <div className={style.links}>
          <ul>
            <NavLink activeClassName={style.links__active} to="/allmeetup">
              <li>All Meetups</li>
            </NavLink>
            <NavLink activeClassName={style.links__active} to="/addmeetup">
              <li>Add Meetup</li>
            </NavLink>
            <NavLink
              activeClassName={style.links__active}
              to="/favouritemeeting"
            >
              <li>Favourite Meeting</li>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
