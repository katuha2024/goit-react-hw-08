import { NavLink } from "react-router-dom";
import mycss from "./authNav.module.css";

export default function AuthNav() {
  return (
    <nav>
      <NavLink
        to="/register"
        className={({ isActive }) =>
          isActive ? `${mycss.Link} ${mycss.active}` : mycss.Link
        }
      >
        Register
      </NavLink>

      <NavLink
        to="/login"
        className={({ isActive }) =>
          isActive ? `${mycss.Link} ${mycss.active}` : mycss.Link
        }
      >
        Login
      </NavLink>
    </nav>
  );
}