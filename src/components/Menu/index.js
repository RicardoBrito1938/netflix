import React from "react";
import Logo from "../../assets/img/LogoMain.png";
import { Link } from "react-router-dom";
import Button from "./components/ButtonLink";
import "./Menu.css";

const Menu = () => {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} to="logo" />
      </a>

      <Button as={Link} className="ButtonLink" href="/cadastro/video">
        Novo video
      </Button>
    </nav>
  );
};

export default Menu;
