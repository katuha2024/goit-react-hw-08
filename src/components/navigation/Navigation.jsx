import { NavLink } from "react-router-dom";
import mycss from "./Navigation.module.css";

export default function Navigation() {
  return (
    <nav>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? `${mycss.NavLink} ${mycss.active}` : mycss.NavLink
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/contacts"
        className={({ isActive }) =>
          isActive ? `${mycss.NavLink} ${mycss.active}` : mycss.NavLink
        }
      >
        Contacts
      </NavLink>
    </nav>
  );
}