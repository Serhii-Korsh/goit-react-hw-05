import "react";
import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";

function Navigation() {
  return (
    <nav className={s.nav}>
      <NavLink to="/" className={s.navlink}>
        Home
      </NavLink>
      <NavLink to="/movies" className={s.navlink}>
        Movies
      </NavLink>
    </nav>
  );
}

export default Navigation;
