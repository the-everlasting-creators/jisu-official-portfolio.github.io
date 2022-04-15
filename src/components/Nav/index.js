import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Nav = () => {
  return (
    <div style={{ background: "black" }}>
      <div style={{ color: "white" }}>JISU CHOI</div>
      <div>
        <nav>
          <ul style={{ color: "white", listStyleType: "none" }}>
            <li>
              <Link to="/" style={{ color: "white" }}>
                HOME
              </Link>
            </li>
            <li>
              <Link to="/aboutme" style={{ color: "white" }}>
                ABOU ME
              </Link>
            </li>
            <li>
              <Link to="/contactme" style={{ color: "white" }}>
                CONTACT ME
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
