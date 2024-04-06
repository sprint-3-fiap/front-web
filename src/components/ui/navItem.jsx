import React from "react";

import { Link } from "react-router-dom";

const NavItem = ({ to, text }) => {
  return (
    <Link to={to} className="navItem">
      <a href="">{text}<span class="bar"></span></a>
    </Link>
  );
};

export default NavItem;