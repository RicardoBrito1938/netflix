import React from "react";
import Logo from "../../assets/img/LogoMain.png";
import "./Menu.css";

const Menu = () => {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="logo" />
      </a>

      <a className="ButtonLink" href="/">
        Novo video
      </a>
    </nav>
  );
};

export default Menu;
