import { NavLink } from "react-router-dom";

import "./NavLinks.css"

function NavLinks() {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/">All Users</NavLink>
      </li>
      <li>
        <NavLink to="/events">All Events</NavLink>
      </li>
      <li>
        <NavLink to="/events/new">Add Event</NavLink>
      </li>
      <li>
        <NavLink to="/auth">Authenticate</NavLink>
      </li>
    </ul>
  )
}

export default NavLinks;