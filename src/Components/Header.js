import React from "react";
import "./Header.scss";

import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

function Header() {
  return (
    <nav className="header">
      <img
        className="header__logo"
        src="https://i.ibb.co/wwLhz98/logo.png"
        alt="MicroSoft Logo"
      />
      <ul className="header__menu">
        <li>
          <a href="#">Office</a>
        </li>
        <li>
          <a href="#">Windows</a>
        </li>
        <li>
          <a href="#">Surface</a>
        </li>
        <li>
          <a href="#">Xbox</a>
        </li>
        <li>
          <a href="#">Deals</a>
        </li>
        <li>
          <a href="#">Support</a>
        </li>
      </ul>

      <ul className="right__menu">
        <li>
          <a href="#" className="fas fa-search"></a>
        </li>
        <li>
          <a href="#" className="fas fa-shopping-cart"></a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
