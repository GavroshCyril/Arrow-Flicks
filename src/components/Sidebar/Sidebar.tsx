import { NavLink } from "react-router-dom";
import { Logo } from "../Logo/Logo";

import "./sidebar.scss";

export const Sidebar = () => {
  return (
    <div className="navbar">
      <Logo />

      <div className="navbar-list">
        <NavLink className="navbar-list__link" to={"/"}>
          Movies
        </NavLink>
        <NavLink className="navbar-list__link" to={"/rated-movies"}>
          Rated movies
        </NavLink>
      </div>
    </div>
  );
};
