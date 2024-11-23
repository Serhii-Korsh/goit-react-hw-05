import "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <NavLink to="/">Главная</NavLink>
      <NavLink to="/movies">Фильмы</NavLink>
    </nav>
  );
}

export default Navigation;
