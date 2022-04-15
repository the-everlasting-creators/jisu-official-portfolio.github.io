import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <div>Jisu Choi</div>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/aboutme">About</Link>
            </li>
            <li>
              <Link to="/contactme">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
